// "use client";

// import React from "react";

// const useInView = <T extends HTMLElement>() => {
//   const ref = React.useRef<T>(null);

//   React.useEffect(() => {
//     // console.log(ref.current);
//     const callback = (entries) => {
//       console.log(entries);
//     };
//     const observer = new IntersectionObserver(callback);
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//   }, []);

//   return { ref };
// };

// export default useInView;

// useInView 훅을 사용할 때, ref를 적용할 요소의 타입을 제네릭으로 전달합니다.
// 여기서는 <div> 태그이므로 `HTMLDivElement`를 사용합니다.
// 이 호출로 인해 `ref` 변수의 타입은 `React.RefObject<HTMLDivElement>`로 확정됩니다.

// JSX에서 <div>의 ref 속성은 `React.Ref<HTMLDivElement>` 타입을 기대합니다.
// `React.RefObject<HTMLDivElement>`는 `React.Ref<HTMLDivElement>` 타입에 포함되므로,
// 이 코드는 타입 오류 없이 정상적으로 작동해야 합니다.
