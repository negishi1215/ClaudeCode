import pygame
import sys
import random
import math

# ゲーム定数
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
PADDLE_WIDTH = 15
PADDLE_HEIGHT = 90
BALL_SIZE = 15
PADDLE_SPEED = 5
BALL_SPEED_X = 7
BALL_SPEED_Y = 7

# 色定義
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
CYAN = (0, 255, 255)
NEON_BLUE = (0, 191, 255)
NEON_PINK = (255, 20, 147)
DEEP_SPACE = (5, 5, 25)
STAR_COLOR = (200, 200, 255)

class Particle:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.vx = random.uniform(-2, 2)
        self.vy = random.uniform(-2, 2)
        self.life = random.uniform(30, 60)
        self.max_life = self.life
        self.size = random.uniform(1, 3)
        
    def update(self):
        self.x += self.vx
        self.y += self.vy
        self.life -= 1
        self.vx *= 0.99
        self.vy *= 0.99
        
    def draw(self, screen):
        alpha = self.life / self.max_life
        if alpha > 0:
            color = (int(CYAN[0] * alpha), int(CYAN[1] * alpha), int(CYAN[2] * alpha))
            pygame.draw.circle(screen, color, (int(self.x), int(self.y)), int(self.size * alpha))
            
    def is_alive(self):
        return self.life > 0

class Star:
    def __init__(self):
        self.x = random.randint(0, SCREEN_WIDTH)
        self.y = random.randint(0, SCREEN_HEIGHT)
        self.brightness = random.uniform(0.3, 1.0)
        self.twinkle_speed = random.uniform(0.02, 0.08)
        self.size = random.randint(1, 2)
        
    def update(self):
        self.brightness += self.twinkle_speed
        if self.brightness > 1.0 or self.brightness < 0.3:
            self.twinkle_speed = -self.twinkle_speed
            
    def draw(self, screen):
        alpha = int(255 * self.brightness)
        color = (min(255, STAR_COLOR[0] + alpha // 4), 
                min(255, STAR_COLOR[1] + alpha // 4), 
                min(255, STAR_COLOR[2]))
        pygame.draw.circle(screen, color, (self.x, self.y), self.size)

class Paddle:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.width = PADDLE_WIDTH
        self.height = PADDLE_HEIGHT
        self.speed = PADDLE_SPEED
        
    def move_up(self):
        if self.y > 0:
            self.y -= self.speed
            
    def move_down(self):
        if self.y < SCREEN_HEIGHT - self.height:
            self.y += self.speed
            
    def draw(self, screen):
        # グロー効果付きパドル描画
        self.draw_glow(screen, NEON_BLUE, 3)
        pygame.draw.rect(screen, CYAN, (self.x, self.y, self.width, self.height))
        
    def draw_glow(self, screen, color, glow_size):
        for i in range(glow_size):
            alpha = 50 // (i + 1)
            glow_color = (color[0], color[1], color[2], alpha)
            glow_rect = pygame.Rect(self.x - i, self.y - i, 
                                  self.width + 2*i, self.height + 2*i)
            # pygameの制限により、透明度付き描画は直接サポートされていないため、
            # 代替として色を薄くして描画
            fade_color = (color[0] // (i + 2), color[1] // (i + 2), color[2] // (i + 2))
            pygame.draw.rect(screen, fade_color, glow_rect)
        
    def get_rect(self):
        return pygame.Rect(self.x, self.y, self.width, self.height)

class Ball:
    def __init__(self):
        self.reset()
        
    def reset(self):
        self.x = SCREEN_WIDTH // 2
        self.y = SCREEN_HEIGHT // 2
        self.speed_x = BALL_SPEED_X * random.choice([-1, 1])
        self.speed_y = BALL_SPEED_Y * random.choice([-1, 1])
        
    def move(self):
        self.x += self.speed_x
        self.y += self.speed_y
        
        # 上下の壁との衝突
        if self.y <= 0 or self.y >= SCREEN_HEIGHT - BALL_SIZE:
            self.speed_y = -self.speed_y
            
    def draw(self, screen):
        # ボールのグロー効果
        self.draw_glow(screen, NEON_PINK, 5)
        pygame.draw.circle(screen, WHITE, (int(self.x + BALL_SIZE//2), int(self.y + BALL_SIZE//2)), BALL_SIZE//2)
        
    def draw_glow(self, screen, color, glow_size):
        for i in range(glow_size):
            fade_color = (color[0] // (i + 1), color[1] // (i + 1), color[2] // (i + 1))
            radius = BALL_SIZE//2 + i
            pygame.draw.circle(screen, fade_color, 
                             (int(self.x + BALL_SIZE//2), int(self.y + BALL_SIZE//2)), radius)
        
    def get_rect(self):
        return pygame.Rect(self.x, self.y, BALL_SIZE, BALL_SIZE)
        
    def reverse_x(self):
        self.speed_x = -self.speed_x

class Game:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        pygame.display.set_caption("クラシック テニスゲーム (Pong)")
        self.clock = pygame.time.Clock()
        
        # ゲームオブジェクト初期化
        self.player_paddle = Paddle(30, SCREEN_HEIGHT // 2 - PADDLE_HEIGHT // 2)
        self.ai_paddle = Paddle(SCREEN_WIDTH - 30 - PADDLE_WIDTH, SCREEN_HEIGHT // 2 - PADDLE_HEIGHT // 2)
        self.ball = Ball()
        
        # スコア
        self.player_score = 0
        self.ai_score = 0
        self.font = pygame.font.Font(None, 74)
        
        # 宇宙エフェクト初期化
        self.stars = [Star() for _ in range(100)]
        self.particles = []
        self.trail_positions = []
        
    def handle_input(self):
        keys = pygame.key.get_pressed()
        
        # プレイヤーパドル操作
        if keys[pygame.K_w] or keys[pygame.K_UP]:
            self.player_paddle.move_up()
        if keys[pygame.K_s] or keys[pygame.K_DOWN]:
            self.player_paddle.move_down()
            
    def ai_control(self):
        # シンプルなAI：ボールの位置に向かってパドルを移動
        paddle_center = self.ai_paddle.y + self.ai_paddle.height // 2
        ball_center = self.ball.y + BALL_SIZE // 2
        
        if paddle_center < ball_center - 10:
            self.ai_paddle.move_down()
        elif paddle_center > ball_center + 10:
            self.ai_paddle.move_up()
            
    def check_collisions(self):
        ball_rect = self.ball.get_rect()
        player_rect = self.player_paddle.get_rect()
        ai_rect = self.ai_paddle.get_rect()
        
        # プレイヤーパドルとの衝突
        if ball_rect.colliderect(player_rect):
            self.ball.reverse_x()
            # ボールが埋まるのを防ぐ
            self.ball.x = player_rect.right
            # 衝突エフェクト
            self.create_collision_particles(player_rect.right, self.ball.y + BALL_SIZE//2)
            
        # AIパドルとの衝突
        if ball_rect.colliderect(ai_rect):
            self.ball.reverse_x()
            # ボールが埋まるのを防ぐ
            self.ball.x = ai_rect.left - BALL_SIZE
            # 衝突エフェクト
            self.create_collision_particles(ai_rect.left, self.ball.y + BALL_SIZE//2)
            
    def create_collision_particles(self, x, y):
        for _ in range(10):
            self.particles.append(Particle(x, y))
            
    def check_scoring(self):
        # 左端を通過（AIポイント）
        if self.ball.x < 0:
            self.ai_score += 1
            self.ball.reset()
            
        # 右端を通過（プレイヤーポイント）
        if self.ball.x > SCREEN_WIDTH:
            self.player_score += 1
            self.ball.reset()
            
    def draw_center_line(self):
        # 未来的な中央線を描画
        for i in range(0, SCREEN_HEIGHT, 20):
            # グラデーション効果のあるライン
            alpha = (math.sin(pygame.time.get_ticks() * 0.005 + i * 0.1) + 1) / 2
            color_intensity = int(255 * alpha * 0.7)
            color = (0, color_intensity, color_intensity)
            pygame.draw.rect(self.screen, color, (SCREEN_WIDTH // 2 - 2, i, 4, 10))
            
    def draw_score(self):
        # 未来的なスコア表示
        player_text = self.font.render(str(self.player_score), True, CYAN)
        ai_text = self.font.render(str(self.ai_score), True, NEON_PINK)
        
        self.screen.blit(player_text, (SCREEN_WIDTH // 4, 50))
        self.screen.blit(ai_text, (3 * SCREEN_WIDTH // 4, 50))
        
    def draw_instructions(self):
        # 操作説明
        font_small = pygame.font.Font(None, 36)
        instruction = font_small.render("W/S or UP/DOWN to move", True, CYAN)
        self.screen.blit(instruction, (SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT - 30))
        
    def update_effects(self):
        # 星の更新
        for star in self.stars:
            star.update()
            
        # パーティクルの更新
        self.particles = [p for p in self.particles if p.is_alive()]
        for particle in self.particles:
            particle.update()
            
        # ボールの軌跡
        self.trail_positions.append((self.ball.x + BALL_SIZE//2, self.ball.y + BALL_SIZE//2))
        if len(self.trail_positions) > 10:
            self.trail_positions.pop(0)
            
    def draw_background(self):
        # 宇宙空間背景のグラデーション
        for y in range(SCREEN_HEIGHT):
            color_factor = y / SCREEN_HEIGHT
            r = int(DEEP_SPACE[0] * (1 - color_factor))
            g = int(DEEP_SPACE[1] * (1 - color_factor))
            b = int(DEEP_SPACE[2] + 20 * color_factor)
            pygame.draw.line(self.screen, (r, g, b), (0, y), (SCREEN_WIDTH, y))
            
    def draw_effects(self):
        # 星空描画
        for star in self.stars:
            star.draw(self.screen)
            
        # ボールの軌跡描画
        for i, pos in enumerate(self.trail_positions):
            alpha = i / len(self.trail_positions)
            radius = int(3 * alpha)
            if radius > 0:
                color = (int(NEON_PINK[0] * alpha), int(NEON_PINK[1] * alpha), int(NEON_PINK[2] * alpha))
                pygame.draw.circle(self.screen, color, pos, radius)
                
        # パーティクル描画
        for particle in self.particles:
            particle.draw(self.screen)
        
    def run(self):
        running = True
        
        while running:
            # イベント処理
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
                elif event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_ESCAPE:
                        running = False
                        
            # ゲーム更新
            self.handle_input()
            self.ai_control()
            self.ball.move()
            self.check_collisions()
            self.check_scoring()
            self.update_effects()
            
            # 描画
            self.draw_background()
            self.draw_effects()
            self.draw_center_line()
            self.player_paddle.draw(self.screen)
            self.ai_paddle.draw(self.screen)
            self.ball.draw(self.screen)
            self.draw_score()
            self.draw_instructions()
            
            pygame.display.flip()
            self.clock.tick(60)  # 60 FPS
            
        pygame.quit()
        sys.exit()

if __name__ == "__main__":
    game = Game()
    game.run()