# React-Native



[참고 URL](https://yuddomack.tistory.com/entry/1React-Native-%EC%84%A4%EC%B9%98%EC%99%80-%EC%8B%A4%ED%96%89hello-world)



## 설정

### React-Native 프로젝트 세팅

- React-Native-Cli 와 Expo 중 React-Native-Cli 선택

- React-Native-Cli 글로벌 설치

  ```
  npm install -g react-native-cli
  ```

- 프로젝트 기본 세팅

  ```
  npx react-native init 프로젝트명
  ```



### [IOS 설정](https://reactnative.dev/docs/environment-setup)

- CocoaPods 설치 (Ruby 빌드 도구)
- Xcode 설치
- 작업 폴더 내에서 npm run ios



### [안드로이드 설정](https://reactnative.dev/docs/environment-setup)

- java 설정 : JDK 설치 후 환경변수 지정
- 안드로이드 설치 후 SDK 추가 : 환경변수에 SDK 추가
- AVD MANAGER 추가 후 실행 
- 작업 폴더 내에서 npm run android



## TIL 

### 컴포넌트 

- StatusBar : 최상단 상태 표시
- SafeAreaView : IOS 디바이스 내에서만 사용가능하며 화면 내에 안전하게 내용을 포함하기 위한 컴포넌트
- ScrollView : 스크롤 처리를 위한 컴포넌트 ( FlatList와 비교해서 일괄 표시하기 때문에 퍼포먼스에 대한 고려 필요)



