# 곽성재 개발환경 만들기

- 직접 개발환경을 세팅하면서 느낀점 및 배운점을 간단히 기록합니다.

## `npm create vite@latest .`

- 현재 디렉토리를 기준으로 프로젝트를 생성

### eslin, prettier 부재

- vanilla ts로 프로젝트 init하면, eslin, prettier 존재하지 않음
  - TODO: eslint, prettier 적용방법 알아보기

## `npm i -D vitest`

- 테스트용 라이브러리 설치(`vitest`)
- `Xxxx.spec.js` 파일이 테스트를 담당하는것으로 보임
  - TODO: ts로도 적용가능한지 알아보기

## 포맷팅 및 린팅 환경 만들기

### husky

### prettier, eslint

### lint-stagedlint-staged, @commitlint/cli @commitlint/config-conventional

### .vscode/settings.json

#### npx prettier --write .