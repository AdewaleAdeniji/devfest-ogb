/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { speakers } from '../speakers';

export function ScheduleSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-black bg-transparent border border-gray-200 rounded-full text-sm mb-4">
            TALKS
          </span>
          <h2 className="text-6xl font-extrabold mb-4 text-black">Options For Everyone</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At DevFest Ogbomoso 2024, we're serving up a full menu of talks and sessions to match every
            taste. No matter what you're into, there's something for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-12 justify-center">
            <button className="px-6 py-2 bg-[#FF9800] text-black rounded-full font-medium">
              Saturday, 30, November, 2024
            </button>
          </div>

          <div className="relative">
            <div className="absolute left-[150px] top-12 bottom-0 w-0.5 bg-gray-200 md:block hidden" />

            {speakers.splice(0,3).map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-16 relative"
              >
                <div className="flex gap-8 md:flex-row flex-col">
                  <div className="md:w-32 pt-8 text-right flex flex-row md:flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-[#4f4f4f]">{session.time.split(' - ')[0]}</div>
                    <div className=" w-full border border-gray-200 h-0 m-8"></div>
                    <div className="text-3xl font-bold text-gray-400">{session.time.split(' - ')[1]}</div>
                  </div>

                  <div className="flex-1 bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-start gap-6 md:flex-row flex-col-reverse">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 text-white rounded-full bg-green-600 font-medium text-sm border border-black">
                            {session.name}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-black">{session.title}</h3>
                        <p className="text-gray-600">{session.description}</p>
                      </div>

                      <img
                        src={session.image}
                        alt={session.name}
                        className="md:w-32 md:h-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div 
                  className="absolute left-[136px] top-12 w-8 h-8 bg-[#FF9800] rounded-full border-4 border-white md:block hidden"
                  style={{ boxShadow: '0 0 0 2px #FF9800' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}