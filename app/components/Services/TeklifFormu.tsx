import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const TeklifFormu = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'SERVICE_ID', // EmailJS servis ID
      'TEMPLATE_ID', // Şablon ID
      form.current,
      'USER_ID' // Public key
    )
    .then(() => alert('Teklif isteği gönderildi!'))
    .catch(() => alert('Hata oluştu, lütfen telefonla ulaşın'));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <input 
        type="text" 
        name="user_name" 
        placeholder="Adınız" 
        required 
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        name="user_phone"
        placeholder="Telefon"
        required
        className="w-full p-2 border rounded"
      />
      <button 
        type="submit" 
        className="bg-[#F53E3E] text-whiteB py-2 px-6 rounded-lg hover:bg-[#D13232] transition"
      >
        Hemen Teklif Alın
      </button>
    </form>
  );
};
export default TeklifFormu;