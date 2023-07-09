# Figma Variables → Tailwind Theme

Figma 로컬 변수(Local variables)를 Tailwind CSS 사용자 정의 테마(Theme)로 변환하는 프로그램

## 사용법

Figma 디자인 시안에 구성된 로컬 변수를 [variables2json](https://www.figma.com/community/plugin/1253571037276959291/variables2json) 플러그인을 사용해 JSON 파일로 내보냅니다.

[degit](https://github.com/Rich-Harris/degit#degit-straightforward-project-scaffolding) 명령을 사용해 [yamoo9/figma2tailwind](https://github.com/yamoo9/figma2tailwind) 저장소 자료를 프로젝트 디렉토리에 복사합니다.

```sh
degit yamoo9/figma2tailwind convertTokens
```

복사된 프로그램 디렉토리 이름으로 node 명령을 실행하면 기본 옵션을 사용해 Tailwind CSS 사용자 정의 테마를 생성합니다.

```sh
node convertTokens # 기본 옵션 : input = theme/variables.json , output = theme/index.js
```

인풋(input), 아웃풋(output) 옵션을 직접 설정할 수도 있습니다.

```sh
node convertTokens --input=demo/variables.json --output=demo/myTheme.js
```
