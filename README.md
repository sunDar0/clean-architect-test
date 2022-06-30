# 클린 아키텍처 적용하기 with nestjs
## Description
nestjs와 mongodb 를 활용하여 클린아키텍처를 구성하여 이해력을 높이고 향후 리팩토링에 참고할 수 있도록 한다.

## 구성
### core
* 추상화 된 핵심 기능들의 나열
* 레파지토리나, 서비스를 추상화 해둠 
### entities
* 실제 사용할 모델의 원형
* 추상화한 코어에서 사용되어짐 - 외부에 영향받지 않는다.
### modules
* 본래 useCase들과 구현체들이 나눠져있어야하지만 관리의 용의성이나 nestjs의 철할면에서 모듈화하는게 나아보여 구현체 부분은 모듈화 진행

## 테스트
```bash
  # 몽고 디비 세팅
  # 이후 별도 디비 생성 후 사용 시 해당 디비에 대한 사용권한을 추가해야함
  docker run -d --name mongo -e MONGO_INITDB_ROOT_USERNAME={userName} -e MONGO_INITDB_ROOT_PASSWORD={password} -d -p 27017:27017 mongo

  npm i
  npm run start:dev
```

## 느낀 점
* 핵심 비즈니스 로직에 대해 완벽한 추상화를 해야한다.
* 다른 외부의 액션에는 영향받지 않도록 구성해야한다.
* 단순한 기능을 만들 때도 많은 코드를 작성해야한다.
* nestjs에서 지향하는 지점과는 다른 형태로 구성해야한다.



[참조](https://github.com/royib/clean-architecture-nestJS)

