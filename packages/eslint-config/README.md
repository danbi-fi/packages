# Danbi Developer ESLint Configuration

![npm (tag)](https://img.shields.io/npm/v/@danbi-fi/eslint-config-danbi-base/latest) ![npm type definitions](https://img.shields.io/npm/types/@danbi-fi/eslint-config-danbi-base) ![npm](https://img.shields.io/npm/dw/@danbi-fi/eslint-config-danbi-base)

단비 개발자들의 `ESLint` 설정 프러그인

## Installation

`yarn add -D eslint prettier @danbi-fi/eslint-config-danbi-base`
## Configuration

- `.eslintrc.js` 파일을 만들어 아래와 같이 씁니다.

```js
module.exports = {
  extends: ["@danbi-fi/eslint-config-danbi-base"],
}
```

- 추가할 `rules`가 있으면

```js
module.exports = {
  extends: ["@danbi-fi/eslint-config-danbi-base"],
  rules: {
    // rules 를 추가
  }
}
```