# Danbi Developer ESLint Configuration

## Configuration

- 설치 `yarn add -D @danbi-fi/eslint-config-danbi-base`
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