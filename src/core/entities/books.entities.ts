export class Author
{
  firstName: string; 
  lastName: string; 
}

export class Genre 
{
  name: string;
}

export class Book
{
  title: string;
  author: Author;
  genre : Genre;
  publishDate: Date;
}

/** use cases
 * 책 전체 리스트 조회
 * 특정 책에 대한 상세 정보
 * 새로운 책 추가
 * 새로운 저자 추가
 */

/** 새로운 책 추가 시 use case
 * 비즈니스 룰 검증?
 * 해당 책이 db에 존재하는지 체크
 * 신규 책 db 생성
 * 도서관 관리 시스템 갱신
 */

/**
 * 데이터 조회하고 생성하는 부분 필요
 * crm service 업데이트 부분 - 외부호출?
 */