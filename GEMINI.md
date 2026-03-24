# GEMINI.md - 마이링크(MyLink) 프로젝트 가이드

이 파일은 MyLink 프로젝트 개발을 지원하기 위해 Gemini CLI에 제공되는 지침서입니다.

## 1. 프로젝트 개요
**마이링크(MyLink)**는 개발자와 크리에이터가 자신의 주요 링크(GitHub, 블로그, 포트폴리오 등)를 하나의 마이크로 랜딩 페이지에 모아 간편하게 공유할 수 있도록 돕는 서비스입니다.

### 핵심 가치
- **단순함(Simplicity)**: 불필요한 기능(이미지 업로드, 테마 변경 등)을 제외하고 본질에 집중합니다.
- **직관성(Intuitiveness)**: 별도의 폼 없이 화면에서 바로 수정하는 **인라인 편집(Inline Editing)**을 지향합니다.
- **자동화(Automation)**: Google Favicon API를 사용하여 등록된 링크의 아이콘을 자동으로 표시합니다.

### 기술 스택
- **프레임워크**: Next.js 16 (App Router, Turbopack)
- **스타일링**: Tailwind CSS v4, shadcn/ui
- **백엔드/인증**: Firebase (Google 소셜 로그인), Firestore (NoSQL)
- **아이콘**: @tabler/icons-react
- **언어**: TypeScript

---

## 2. 빌드 및 실행
모든 명령어는 `@my-link-app/` 디렉토리 내에서 실행해야 합니다.

- **의존성 설치**: `npm install`
- **로컬 개발 서버**: `npm run dev` (Turbopack 사용)
- **프로젝트 빌드**: `npm run build`
- **린트 체크**: `npm run lint`
- **코드 포맷팅**: `npm run format` (Prettier)
- **타입 체크**: `npm run typecheck`

---

## 3. 개발 컨벤션

### UI/UX 원칙
- **shadcn/ui 기반**: 일관된 디자인 시스템을 위해 가능한 한 shadcn/ui 컴포넌트를 활용합니다.
- **모바일 퍼스트**: 모든 화면이 모바일 기기에서 최적의 경험을 제공하도록 합니다.
- **인라인 편집**: 관리자 모드에서는 텍스트 클릭 시 즉시 `Input` 또는 `Textarea`로 전환되어 수정 가능해야 합니다.

### 데이터 구조 (Firestore)
- **사용자 문서**: `displayName`과 `bio`를 포함합니다. `displayName`은 URL 슬러그 역할을 합니다.
- **링크 서브 컬렉션**: `users/{userId}/links/{linkId}` 경로로 관리됩니다.

### 코딩 스타일
- **컴포넌트**: 재사용 가능한 UI 컴포넌트는 `@my-link-app/components/` 디렉토리에 위치시킵니다.
- **로직**: 필요한 경우 UI와 로직을 분리하여 `@my-link-app/hooks/` 또는 `@my-link-app/lib/` 디렉토리에 관리합니다.
- **아이콘**: `@tabler/icons-react`를 기본 아이콘 라이브러리로 사용합니다.

---

## 4. 주요 경로 및 파일
- `@docs/`: PRD, 사용자 시나리오, 와이어프레임
- `@my-link-app/app/`: Next.js App Router 페이지 및 레이아웃
- `@my-link-app/components/ui/`: shadcn/ui 컴포넌트
- `@my-link-app/lib/utils.ts`: 공통 유틸리티 (예: tailwind-merge)

---
*최종 업데이트: 2026-03-24*
