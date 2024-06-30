# Test Template Generator

Test Template Generator는 함수 또는 React 컴포넌트를 입력받아 해당 텍스트를 파싱하여 적절한 테스트 템플릿을 생성해주는 도구입니다. 이 프로젝트는 Next.js와 TypeScript를 기반으로 하며, 초기 프로젝트에서 테스트를 작성하는 데 도움을 주는 것을 목표로 합니다.

## 기능 개요

1. **기능을 개발하면서 테스트는 프로젝트의 안정성에 큰 영향을 미칩니다.**
2. **하지만, 초기 프로젝트에서 테스트를 작성하는 것은 큰 어려움이 있습니다.**
3. **그리고 테스트를 작성하는 데 우리는 매우 많은 시간을 허비합니다.**
4. **이 프로젝트의 기능은 입력창에 테스트 템플릿을 제공받기 위한 함수 또는 컴포넌트를 입력하면 해당 텍스트를 파싱하여 적절한 테스트 템플릿을 구성해줍니다.** (가이드에 개념 내용은 사용자가 충분히 더 추가하거나 해야함)
5. **Reactjs 기반의 컴포넌트와 작성한 함수들에 대해서 Props 및 내부 요소를 기반으로 테스트 템플릿을 작성해주는 기능입니다.**

## 기능 상세 설명

1. **입력창을 통해서 함수를 전달받으면 해당 함수를 테스트하기 위한 단순한 템플릿을 제공합니다.**
2. **React 컴포넌트를 입력한다면, Props와 return 이하 부분을 파싱하여 구조에 대해서 간단한 테스트 템플릿을 제공합니다.**

## 설치 및 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/test-template-generator.git
cd test-template-generator
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 이동하여 애플리케이션을 확인할 수 있습니다.

## 사용법

1. **함수 또는 React 컴포넌트 입력**: 입력창에 테스트 템플릿을 제공받기 위한 함수 또는 컴포넌트를 입력합니다.
2. **테스트 템플릿 생성**: "Generate Test" 버튼을 클릭하면 입력된 코드에 대한 테스트 템플릿이 생성됩니다.
3. **생성된 템플릿 확인**: 생성된 테스트 템플릿을 확인하고 필요에 따라 수정하여 사용합니다.

## 폴더 구조

```
my-testing-template-app/
├── public/
├── src/
│   ├── components/
│   │   └── TestInput.tsx
│   ├── lib/
│   │   └── parseFunction.ts
│   │   └── parseComponent.ts
│   ├── pages/
│   │   ├── api/
│   │   └── index.tsx
│   ├── styles/
│   ├── types/
│   └── utils/
│       └── generateTestTemplate.ts
├── .eslintrc.js
├── .gitignore
├── jest.config.js
├── jest.setup.js
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## 기여 방법

기여를 환영합니다! 이 프로젝트에 기여하려면 다음 단계를 따라주세요:

1. 이 저장소를 포크합니다.
2. 새 브랜치를 만듭니다. (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋합니다. (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다. (`git push origin feature/amazing-feature`)
5. 풀 리퀘스트를 엽니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 라이선스가 부여됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
