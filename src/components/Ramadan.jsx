'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ramadan = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = [
    { day: 1, suhoor: '05:44 AM', iftar: '6:48 PM', date: '11 Mar 2024' },
    { day: 2, suhoor: '05:43 AM', iftar: '6:49 PM', date: '12 Mar 2024' },
    { day: 3, suhoor: '05:41 AM', iftar: '6:50 PM', date: '13 Mar 2024' },
    { day: 4, suhoor: '05:39 AM', iftar: '6:51 PM', date: '14 Mar 2024' },
    { day: 5, suhoor: '05:37 AM', iftar: '6:52 PM', date: '15 Mar 2024' },
    { day: 6, suhoor: '05:35 AM', iftar: '6:54 PM', date: '16 Mar 2024' },
    { day: 7, suhoor: '05:34 AM', iftar: '6:55 PM', date: '17 Mar 2024' },
    { day: 8, suhoor: '05:32 AM', iftar: '6:56 PM', date: '18 Mar 2024' },
    { day: 9, suhoor: '05:30 AM', iftar: '6:57 PM', date: '19 Mar 2024' },
    { day: 10, suhoor: '05:28 AM', iftar: '6:58 PM', date: '20 Mar 2024' },
    { day: 11, suhoor: '05:26 AM', iftar: '6:59 PM', date: '21 Mar 2024' },
    { day: 12, suhoor: '05:25 AM', iftar: '7:00 PM', date: '22 Mar 2024' },
    { day: 13, suhoor: '05:23 AM', iftar: '7:02 PM', date: '23 Mar 2024' },
    { day: 14, suhoor: '05:21 AM', iftar: '7:03 PM', date: '24 Mar 2024' },
    { day: 15, suhoor: '05:19 AM', iftar: '7:04 PM', date: '25 Mar 2024' },
    { day: 16, suhoor: '05:17 AM', iftar: '7:05 PM', date: '26 Mar 2024' },
    { day: 17, suhoor: '05:15 AM', iftar: '7:06 PM', date: '27 Mar 2024' },
    { day: 18, suhoor: '05:13 AM', iftar: '7:07 PM', date: '28 Mar 2024' },
    { day: 19, suhoor: '05:11 AM', iftar: '7:08 PM', date: '29 Mar 2024' },
    { day: 20, suhoor: '05:09 AM', iftar: '7:10 PM', date: '30 Mar 2024' },
    { day: 21, suhoor: '05:08 AM', iftar: '7:11 PM', date: '31 Mar 2024' },
    { day: 22, suhoor: '05:06 AM', iftar: '7:12 PM', date: '01 Apr 2024' },
    { day: 23, suhoor: '05:04 AM', iftar: '7:13 PM', date: '02 Apr 2024' },
    { day: 24, suhoor: '05:02 AM', iftar: '7:14 PM', date: '03 Apr 2024' },
    { day: 25, suhoor: '05:00 AM', iftar: '7:15 PM', date: '04 Apr 2024' },
    { day: 26, suhoor: '04:58 AM', iftar: '7:16 PM', date: '05 Apr 2024' },
    { day: 27, suhoor: '04:56 AM', iftar: '7:17 PM', date: '06 Apr 2024' },
    { day: 28, suhoor: '04:54 AM', iftar: '7:19 PM', date: '07 Apr 2024' },
    { day: 29, suhoor: '04:52 AM', iftar: '7:20 PM', date: '08 Apr 2024' },
    { day: 30, suhoor: '04:50 AM', iftar: '7:21 PM', date: '09 Apr 2024' },
  ];

  return (
    <>
      <section
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        className="sm:mt-48 mt-32"
      >
        <h1 className="text-center mb-10 lg:text-5xl text-4xl font-bold bg-gradient-to-r from-lime-900 to-lime-500 text-transparent bg-clip-text">
          Ramadan Calendar 2024
        </h1>
      </section>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-id="super-duper"
        className="overflow-x-auto"
      >
        <table className="table table-lg table-pin-rows table-pin-cols text-center">
          <thead className="text-lg text-center">
            <tr>
              <th>Day</th>
              <td>Fajr</td>
              <td>Maghrib</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody className="text-lg">
            {data.map((item) => (
              <tr key={item.day}>
                <th>{item.day}</th>
                <td>{item.suhoor}</td>
                <td>{item.iftar}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Ramadan;
