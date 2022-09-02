
# nextjs (javascript)

## stack
- axios
- swr (stale-while-revalidate)
- react-bootstrap
- lodash

## structure
- lib [ http, database ]
- pages [ api(handler), components, containers, frame ]
- public (resource)
- utils
- ui
- hooks

<hr>

`If you meant to render a React component, start its name with an uppercase letter.` <br>
react component를 return하는 컴포넌트는 반드시 대문자로 시작해야함 (파일 이름은 소문자여도 상관없음)
<br/>
useRouter push 할 때, handler(api routers)를 호출하면 안됨. 그리고 handler는 return 하지않고 res.status(xxx) 형식으로 리턴