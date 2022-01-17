import React, { useEffect, useRef, useState } from "react";
import { sanityClient } from "../sanity";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

const Upcomingevents = ({ event }) => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    const eventDate = event[0].launchAt;
    const countDownDate = new Date(eventDate).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  console.log(event);
  return (
    <>
      <div className="bg-gradient-to-t from-[#ED1C24] to-[#2E3192] h-screen">
        <section>
          <div className="ml-5">
            <Link href="/">
              <button className="bg-white mt-5 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <div>
                  <HiHome />
                </div>
              </button>
            </Link>
          </div>
          <div className="justify-center flex text-6xl text-center text-white">
            <div className="mx-4 mt-[8%]">
              <div className="font-bold">{event[0].eventName}</div>
              <br />
              <div className="text-2xl">{event[0].eventDescription}</div>
            </div>
          </div>
          <hr className="font-bold mx-[20%] mt-[15px]" />
          <div className=" justify-center flex mt-9 text-white">
            <div className="flex flex-wrap gap-4 text-5xl">
              <div>{timerDays} :</div>
              <div>{timerHours} :</div>
              <div>{timerMinutes} :</div>
              <div>{timerSeconds}</div>
            </div>
          </div>
        </section>
        <div className="justify-center flex mt-10">
          <Link href="/events">
            <a>
              <button className="bg-[#2E3192] text-white p-3 rounded-xl">
                Other Events
              </button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = `*[_type == "upcomingevent"] | order(_createdAt desc)`;
  const event = await sanityClient.fetch(query);

  if (!event.length) {
    return {
      props: {
        event: []
      }
    };
  } else {
    return {
      props: {
        event
      }
    };
  }
};

export default Upcomingevents;
