import Link from "next/link";
import { HiHome } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";

// export default function UpComingEvents({ upcomingevents }) {
//   const [timerDays, setTimerDays] = useState(0);
//   const [timerHours, setTimerHours] = useState(0);
//   const [timerMinutes, setTimerMinutes] = useState(0);
//   const [timerSeconds, setTimerSeconds] = useState(0);

//   let interval = useRef();

//   const startTimer = () => {
//     const eventDate = upcomingevents.date;
//     const countDownDate = new Date(eventDate).getTime();
//     interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       if (distance < 0) {
//         clearInterval(interval.current);
//       } else {
//         setTimerDays(days);
//         setTimerHours(hours);
//         setTimerMinutes(minutes);
//         setTimerSeconds(seconds);
//       }
//     }, 1000);
//   };

//   useEffect(() => {
//     startTimer();
//     return () => {
//       clearInterval(interval.current);
//     };
//   });
//   console.log(timerDays);
//   return (
//     <div>
//       <div className="bg-gradient-to-t from-[#eeaeca] to-[#94bbe9] h-screen">
//         <section>
//           <div className="ml-5">
//             <Link href="/">
//               <button className="bg-white mt-5 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
//                 <div>
//                   <HiHome />
//                 </div>
//               </button>
//             </Link>
//           </div>
//           <div className="justify-center flex text-6xl text-center text-black">
//             <div className="mx-4 mt-[8%]">
//               <div className="font-bold">{upcomingevents.title}</div>
//               <br />
//               <div className="text-2xl">{upcomingevents.description}</div>
//             </div>
//           </div>
//           <hr className="font-bold mx-[20%] mt-[15px]" />
//           <div className=" justify-center flex mt-9 text-black">
//             <div className="flex flex-wrap gap-4 text-5xl">
//               <div>{timerDays} :</div>
//               <div>{timerHours} :</div>
//               <div>{timerMinutes} :</div>
//               <div>{timerSeconds}</div>
//             </div>
//           </div>
//         </section>
//         <div className="justify-center flex mt-10">
//           <Link href="/events">
//             <button className="bg-[#2E3192] text-white p-3 rounded-xl">
//               Other Events
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// UpComingEvents.getInitialProps = async () => {
//   const res = await fetch(
//     "https://runners-clan.vercel.app/api/upcoming/62bc73af7f98b980523fd375"
//   );
//   const { data } = await res.json();

//   return { upcomingevents: data };
// };

export default function UpComingEvents() {
  return <div> This is upcoming events</div>;
}
