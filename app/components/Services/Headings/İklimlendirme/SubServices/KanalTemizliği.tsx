import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const KanalTemizliği = () => {
  return (
    <div className="max-w-6xl max-lg:pt-6 mx-auto px-4">
      <section className="text-start mb-10">
        <div className="space-y-8 text-black/90 max-w-5xl">
          <p>
            İklimlendirme sistemlerinin verimli çalışabilmesi için, havalandırma kanallarının temizliği oldukça önemlidir. Zamanla, havalandırma kanallarında toz, kir, polen ve diğer kirleticiler birikebilir. Bu birikintiler, hava akışını engeller ve havalandırma sistemlerinin verimli çalışmasını zorlaştırır.
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
                    Kanal temizliği, havalandırma sistemlerinin düzenli bakımlarından biridir ve uzman kişiler tarafından yapılmalıdır. Bu temizlik, özellikle alerjik reaksiyonları olan kişiler için çok önemlidir, çünkü kirli hava kanalları iç mekan havasını kirletebilir ve sağlık problemlerine yol açabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KanalTemizliği