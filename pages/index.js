import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/MyLayout';

// const GithubLogin = styled.button`
//   background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// `

const PostLink = (props) => {
  return (
    <li>
      {/* <Link href={{pathname:`/post?title=${props.title}`}}> */}
      <Link 
        as={{
          pathname:`/p/${props.id}`, 
        }}
        href={{ 
          pathname:'/post', 
          query: { title:props.title } 
        }}>
        <a> {props.title} </a>
      </Link>
    </li>
  )
}

const Index = () => {
  return (
    <div>
      <Layout>
        <p> Hello next js main page </p>
        <ul>
          <PostLink id="hello-nextJs" title="Hello Next js" />
          <PostLink id="fun-games" title="Funny Games" />
          <PostLink id="deployment" title="Deploy apps with Zeit" />
        </ul>
        <Link href={{
          pathname: '/gmaps'
        }}> 
          <a> Google Maps </a>
        </Link>
      </Layout>
    </div>
  )
}

export default Index;