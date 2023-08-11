
import Magazine from "../components/Magazine"
import magazine1 from "../assets/mgz1.png"
import magazine2 from "../assets/mgz2.png"
import magazine3 from "../assets/mgz3.png"
import magazine4 from "../assets/mgz4.png"
function Magazinepage() {

    const listmagazine = [
        {
          image: magazine1,
          article:
            '"Halo moodster... Di minggu ini kita akan bagi-bagi beberapa koleksi outer kawula nih untuk kalian, kapan lagi bisa dapetin outer gratis, kita menyediakan 3 hadiah untuk kalian yang beruntung. Yuk ikutan gampang banget nih caranya. Rules Giveaway!! 1. Follow @kawula.mood 2. Komen dipostingan ini koleksi kawula yang paling kalian sukai 3. Tag 4 orang teman kalian 4. Akun tidak boleh di private 5. Fake account automatis diskualifikasi. Batas akhir giveaway 22 Agustus 2020, pukul 20.00 WIB. Pengumuman GiveAway 23 Agustus 2020, pukul 17.00 WIB. Yuk buruan komen jangan sampai tidak mencoba dan menyesal. ✨  "',
        },
        {
          image: magazine2,
          article:
            '"Dan bagi tiap-tiap umat telah Kami syariatkan penyembelihan (kurban), supaya mereka menyebut nama Allah terhadap binatang ternak yang telah direzekikan Allah kepada mereka, maka Tuhanmu ialah Tuhan Yang Maha Esa, karena itu berserah dirilah kamu kepada-Nya. Dan berilah kabar gembira kepada orang-orang yang tunduk patuh (kepada Allah)." (Quran Surat Al-Hajj Ayat 34) Selamat hari raya idul adha. Semoga Allah selalu memberikan keberkahan dan kesehatan untuk kita semua ✨',
        },
        {
          image: magazine3,
          article:
            '"Satukan tangan dan teguhkan hati di hari penuh kemenangan ini untuk saling memaafkan dengan ikhlas. Selamat Hari Raya Idul Fitri 1442 H.Semoga kita semua bisa dipertemukan kembali dengan bulan Ramadhan selanjutnya. AamiinHappy Eid Mubarak ✨"',
        },
        {
          image: magazine4,
          article:
            '"Shaumlah karena iman dan mengharap pahala dariNya.Selamat menunaikan ibadah puasa temen-teman, mohon maaf lahir batin ✨Marhaban ya ramadan 1442 H"',
        },

      ];

  return (
    <section className="magazine px-[100px] smartphone:px-10 tablet:px-20 py-28">
    <h1 className="smartphone:text-[30px] text-center font-semibold text-[40px]">
        News
    </h1>
    <div>
    {listmagazine.map((listmgz, index) => (
              <Magazine key={index} listmgz={listmgz} />
            ))}  
    </div>
    <div>
    <div className="flex items-center justify-center gap-6 mt-[80px]">
      <p>1</p>
      <p className="text-[#D9D9D9]">2</p>
      <p className="text-[#D9D9D9]">3</p>
      <p className="text-[#D9D9D9]">4</p>
      <p className="text-[#D9D9D9]">5</p>
    </div>
    </div>
    </section>
  )
}

export default Magazinepage