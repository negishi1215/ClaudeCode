'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeEditorProps {
  className?: string
}

const InteractiveCodeEditor: React.FC<CodeEditorProps> = ({ className = '' }) => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [displayedCode, setDisplayedCode] = useState('')

  const codeExamples = [
    {
      language: 'javascript',
      title: 'React Component Generation',
      code: `// Claude Code が生成したReactコンポーネント
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // バリデーション、セキュリティ対策込み
    await authenticateUser({ email, password });
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto p-6"
    >
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="メールアドレス"
          required
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        ログイン
      </button>
    </motion.form>
  );
};

export default LoginForm;`
    },
    {
      language: 'python',
      title: 'API Endpoint Creation',
      code: `# Claude Code が生成したFastAPI エンドポイント
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
import jwt
from datetime import datetime, timedelta

app = FastAPI()

@app.post("/api/users/", response_model=UserResponse)
async def create_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    """
    新規ユーザー作成
    - セキュリティ対策実装済み
    - バリデーション完備
    - エラーハンドリング含む
    """
    # メールアドレス重複チェック
    if db.query(User).filter(User.email == user.email).first():
        raise HTTPException(
            status_code=400,
            detail="メールアドレスが既に使用されています"
        )
    
    # パスワードハッシュ化
    hashed_password = hash_password(user.password)
    
    # ユーザー作成
    db_user = User(
        email=user.email,
        hashed_password=hashed_password,
        created_at=datetime.utcnow()
    )
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    return db_user`
    },
    {
      language: 'typescript',
      title: 'Advanced Type Definitions',
      code: `// Claude Code が生成した高度な型定義
interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  timestamp: string;
}

type UserRole = 'admin' | 'user' | 'moderator';

interface User {
  id: string;
  email: string;
  profile: UserProfile;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
}

// 条件付き型を使用した高度な型操作
type ApiEndpoint<T extends string> = T extends 'users' 
  ? '/api/users'
  : T extends 'posts'
  ? '/api/posts'
  : never;

// ユーティリティ型を活用
type PartialUser = Partial<Pick<User, 'email' | 'profile'>>;
type RequiredProfile = Required<UserProfile>;

// 関数型とジェネリクス
async function fetchData<T>(
  endpoint: string
): Promise<ApiResponse<T>> {
  const response = await fetch(endpoint);
  return response.json();
}

// 使用例
const userData = await fetchData<User[]>('/api/users');`
    }
  ]

  // タイピングアニメーション効果
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const typeCode = async () => {
      setIsTyping(true)
      const currentCode = codeExamples[currentCodeIndex].code
      
      for (let i = 0; i <= currentCode.length; i++) {
        setDisplayedCode(currentCode.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 20))
      }
      
      setIsTyping(false)
      
      // 3秒後に次のコード例に移行
      timeout = setTimeout(() => {
        setCurrentCodeIndex((prev) => (prev + 1) % codeExamples.length)
      }, 3000)
    }

    typeCode()

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [currentCodeIndex])

  const currentExample = codeExamples[currentCodeIndex]

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm font-medium">
              {currentExample.title}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-400 text-xs">Claude Code実行中</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="relative h-96 overflow-hidden">
          <SyntaxHighlighter
            language={currentExample.language}
            style={atomDark}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              background: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              height: '100%',
              overflow: 'auto'
            }}
            showLineNumbers
            wrapLines
          >
            {displayedCode}
          </SyntaxHighlighter>
          
          {/* Typing Cursor */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-6 right-6 w-2 h-6 bg-primary-400"
              />
            )}
          </AnimatePresence>

          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent animate-aurora pointer-events-none" />
        </div>

        {/* Progress Indicators */}
        <div className="px-6 py-3 bg-gray-800/30 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {codeExamples.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCodeIndex 
                      ? 'bg-primary-500 scale-125' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="text-xs text-gray-400">
              {currentCodeIndex + 1} / {codeExamples.length}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-20 animate-pulse-glow" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full opacity-20 animate-neural-pulse" />
    </div>
  )
}

export default InteractiveCodeEditor