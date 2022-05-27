import axios from "axios";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { server } from "../config";


export default function Home({movies}) {
  // console.log(movies)


  try {
    return (
      <div className="bg-gray-700">
        <Hero/>
        <PopularMovie movies={movies.results}/>
      </div>
    )
  } catch (error) {
    return <ErrorHandler error={error} />
  }

}


function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export async function getStaticProps(){
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data;
  // const movies = [{name:'hello'}]
  return {  
    props:{movies}
  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1


// An error occurs when clicking watchme on the detail page or contact us page.


// next-dev.js?3515:25 The above error occurred in the <img> component:

//     at img
//     at ImageElement (webpack-internal:///./node_modules/next/dist/client/image.js:792:32)
//     at span
//     at Image (webpack-internal:///./node_modules/next/dist/client/image.js:87:22)
//     at div
//     at div
//     at Hero
//     at div
//     at Home (webpack-internal:///./pages/index.js:15:24)
//     at main
//     at Layout (webpack-internal:///./components/Layout.js:13:26)
//     at MyApp (webpack-internal:///./pages/_app.js:39:27)
//     at ErrorBoundary (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/client.js:8:20746)
//     at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/client.js:8:23395)
//     at Container (webpack-internal:///./node_modules/next/dist/client/index.js:323:9)
//     at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:825:26)
//     at Root (webpack-internal:///./node_modules/next/dist/client/index.js:949:27)

// React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.
// window.console.error @ next-dev.js?3515:25
// overrideMethod @ react_devtools_backend.js:4026
// logCapturedError @ react-dom.development.js?ac89:18572
// callback @ react-dom.development.js?ac89:18640
// callCallback @ react-dom.development.js?ac89:13122
// commitUpdateQueue @ react-dom.development.js?ac89:13143
// commitLayoutEffectOnFiber @ react-dom.development.js?ac89:23263
// commitLayoutMountEffects_complete @ react-dom.development.js?ac89:24578
// commitLayoutEffects_begin @ react-dom.development.js?ac89:24564
// commitLayoutEffects @ react-dom.development.js?ac89:24502
// commitRootImpl @ react-dom.development.js?ac89:26779
// commitRoot @ react-dom.development.js?ac89:26638
// finishConcurrentRender @ react-dom.development.js?ac89:25848
// performConcurrentWorkOnRoot @ react-dom.development.js?ac89:25765
// workLoop @ scheduler.development.js?bcd2:266
// flushWork @ scheduler.development.js?bcd2:239
// performWorkUntilDeadline @ scheduler.development.js?bcd2:533
