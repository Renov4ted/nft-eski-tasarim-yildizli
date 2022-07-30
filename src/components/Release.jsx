import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";

export default function Release() {
  return (
    <div style={{
      position: "relative",
      zIndex: 3
    }} className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Road Map</h2>
          <p className="description">
            *Uzun vadeli bir taahhüt planı ile sahiplerimize dürüst ve anlaşılır olmak ana hedefimizdir..<br />
            Algorand blok zincirini geliştirmek ve topluluk yaratmak amacıyla ilkelerimizden vaz geçmeyeceğiz.<br />
            *Sosyal Medya Hesaplarının Oluşturulması (Pandanın topluluk ile tanışması)
            -Twiter Instagram v.b<br />
            -Web Sitesinin Yayınlanması<br />
            -Discord Sunucusunun Topluluğa Açılması<br />
            -Pazar Yerlerine Onay başvurusunda bulunulması<br />
            -Koleksiyonun Mint Tarihinin Belirlenmesi<br />
            -Diğer Sanatçılarla iş birliği yapılması<br />
            -Halka Açık Açık Arttırma Yapılması<br />
            -Her hafta düzenlenecek çekilişlerden eşsiz “Şanslı Pandalar”dan birini kazanma fırsatı sizi bekliyor.<br />
            -Satışlardan gelen yardım planı meta dan alınan alanda holder ler ile toplantı yapılıp belirlenmesi<br />

            via <a href="#">OpenSea</a>
          </p>
          <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" style={{ width: 1000, height: 500 }} />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">

        <div className="image">
          <img src={release1} alt="release" style={{ width: 1000, height: 500 }} />
          <div className="ellipse pink"></div>
        </div>
        <div className="content">
          <h2 className="title">ABOUT US</h2>
          <p className="description">
            The year is 2084 and only a few pandas remain.<br />
            Worldwide - Lucky Pandas. they are in danger
            Pandas embark on a journey to survive.<br /> During this journey,
            They must find new habitats rich in bamboo, water and water.<br />
            other vital needs they need on different continents.<br />
            Lucky Pandas includes a unique collection of 9999 NFTs
            Available on the Algorand blockchain.
            Would you like to witness the transcontinental journey of Lucky Pandas?
            their journey, their evolution as they spread across the world,
            and encounters with other species?
            *Our project believes in using art to spread love, positivity and creativity.
            *Welcome to the world where we start working, having fun and learning together.
            Then join us <a href="#">OpenSea</a>
          </p>
          
          <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>

          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>

        </div>
      </div>
    </div>
  );
}
