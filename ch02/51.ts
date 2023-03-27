let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft' // OK
postStatus = 'drafts' // 타입 선언에 없는 문자열이 할당되어 있으므로 컴파일 시 에러.