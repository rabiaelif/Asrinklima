import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const YenidenKurulum = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-8 text-black/90 max-w-5xl">
          <p>
            İklimlendirme sistemlerinin zamanla eskiyen veya arızalanan ekipmanları, yeniden kurulum gerektirebilir. Eski sistemlerin değiştirilmesi veya yeni sistemlerin kurulması, mekanın daha verimli bir şekilde iklimlendirilmesini sağlar. Yeniden kurulum işlemi, hem konforu artırır hem de enerji tüketiminde tasarruf sağlar.
          </p>
          <div className=" mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaExclamationTriangle className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <h3 className=" font-medium text-red-800">Dikkat!</h3>
                <div className="mt-2  text-red-700">
                  <p>
                    Eski sistemlerin yerine modern ve verimli iklimlendirme cihazları kurmak, işletmelerin enerji verimliliğini artırırken, işletme maliyetlerini düşürür. Yeniden kurulum, uzman ekipler tarafından yapılmalı ve doğru ekipmanlarla gerçekleştirilmelidir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 mb-6 mx-4 p-6 bg-gradient-to-br bg-red rounded-xl shadow-2xl text-whiteB">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Yeniden Kurum Çözümlerinde Uzman Destek
          </h3>
          <p className="text-lg mb-6 !text-whiteB">
          Daha fazla bilgi almak veya yeniden kurulum hizmetiyle ilgili sorularınız varsa, bizimle iletişime geçmekten çekinmeyin.<span className="block mt-2">
          Size yardımcı olabilmek için buradayız ve iklimlendirme sistemlerinizin verimli çalışmasını sağlamak adına her türlü desteği sunmaktan mutluluk duyarız.
          </span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+905388225549" className="border-2 border-white hover:bg-white hover:text-red font-semibold py-3 px-6 rounded-lg transition duration-300">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0538 822 55 49
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YenidenKurulum