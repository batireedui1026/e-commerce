"use client";
import axios from "axios";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
const Detail = () => {
  const baraa = [
    {
      ner: "The Prompt Magazine",
      une: 120000,
      img: "/image.png",
    },
    {
      ner: "Chunky Glyph Tee",
      une: 120000,
      img: "/image2.png",
    },
    {
      ner: "All Smiles Nalgene",
      une: 120000,
      img: "/image3.png",
    },
    // {
    //   ner: "Wildflower Hoodie",
    //   une: 108000,
    //   img: "/image4.png",
    // },
    {
      ner: "Inkblot Tee",
      une: 120000,
      img: "/image5.png",
    },
    {
      ner: "Gestures Longsleeve",
      une: 120000,
      img: "/image2.png",
    },
    {
      ner: "Chunky Glyph Cap",
      une: 120000,
      img: "/image7.png",
    },
    {
      ner: "Local Styles Crewneck",
      une: 120000,
      img: "/image8.png",
    },
    {
      ner: "Chunky Glyph Cap",
      une: 120000,
      img: "/image7.png",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex justify-between ml-20 mr-60">
        <div className="flex gap-32">
          <div className=" my-40 flex flex-col gap-4 ">
            <img
              className="w-16 h-24 rounded object-cover"
              src="https://s3-alpha-sig.figma.com/img/3708/a364/2cc93e10c62fdcfbc65fcc2ebd1c8aac?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ooUEUqmuYW6QEEGLhZ-TQyqmEogKccyKw8MIecGT8yJx3UsayNCWUp-P3BF4-HStP5RLvnzysustbH5QyYvWxnE9FrbYlQG2U6sPZu2cJ6FPMiqf~Mk8wwmfGMNG8KKDvjnx70a6ohGPmSdOSQo-S6Dv6zLQzQP5v7szHLqtNFMzgWkjzdCqy0X4lwBSwT~x-ImLBDS-yBzbxpu4vvCcIufvrT1e~CofC6OgRudYUW1C7kd0Rz737kyDU-sOHf5GSLyOpIZNRDwUhKBGYs6RxhcXFjNRNHBhkOwTKJn2XQkX6Qn3aI8eZarjweZmh7l3yL7hoVq5zsfD6Q3OUPR2LQ__"
            ></img>
            <img
              className="w-16 h-24 rounded object-cover"
              src="https://s3-alpha-sig.figma.com/img/0e8a/5582/df71cfe2afb770daa5d2b0aafeae7b5a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b3tHedAhZ3xhMYJ21xc9t0m6Y8SbCV11gvgEh~MeCgajBa7AgmGZOoE6gTbLYOa-o8E6GISRveLzw~7LepW-qZp5vWYoaBLJ5tLTZRDuG4bljI1ly429nWc71bhkd47xGVsrGWh6UuA~x-Oy6kvPHy~bKOEjnjLTT2wsXn6NCZzp7A6Ky8knZOhbzqrSsbeYzwzVCJTPuhcqz3tfy5TQfD5ZxFtIyGn8Eu3KYrh25yviTurmlpa6H~z~MEjOSMKEfyvN-JuuoMfg7lAhtcipMUGK9O~v2NpuENGf-8sGXL7r0lhpKYNnp3ANc-gNgFugKkML-OM8xDOkeAXroA2kbg__"
            ></img>
            <img
              className="w-16 h-24 rounded object-cover"
              src="https://s3-alpha-sig.figma.com/img/de34/2db3/cbe229408180afd06a6cf0d8b43243c6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nFihg0FGahz6SxJuQb-wMR4wxr0rE0XAwqrl31g0~cVbviHd~-H4YtslrsXNSI44teT1Wv-zyt-IC~Y~UZM4hcg4SEd0FWLdHzOG0Sar6ExR4pEHVMDnxfclfjft8tIA62A8k9VTX7Oxpbbz1AY9hQbcINbhUNX03upIZDa3ivITW7WNfEZMfDH-8ko9zgak~SI1YG718DGWpNqttS0adRZxaHqfYKOll7P7rQUwWrXECUIujmAYOoOuLwy5~ngEMHVa3tqz5HRYcIAI8tBN4GjWRaWhOt4QEUiBJBRug39N6d1ssTUuGDxDbt-XvBYD5BLNHXMQ-hDcy~n09BsEbw__"
            ></img>
            <img
              className="w-16 h-24 rounded object-cover"
              src="https://s3-alpha-sig.figma.com/img/5aed/431f/148c4c10509c1d0aa716cc8e9d80a0f1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VK3pPuK7JizUV~Y19UYNQDfZnXtUgotQvv-zJ4Uhp6ZVF5noFz4vCbgSvhJX3YLKftrY2xeO9pASp9Z43yEyS1jnbBtBkl8qtphyelPSNThzk7wCliCM6NQ12vmX1vduL3idKTo5nZwot7MbRev7yizoj8yvYCyJVfCMwyTN2cTvGl1UftzNaK~PYMr57VlcF8PlHFqji7WUbyRTGT5N5te0OmSm5crf7ZYUay~vVVEox5ssQHZrR4Qzegy9E2nxWFxQylUbZv~wYsynoKeJstPChgj-pVvDZiYfVqqalPrw4gQRvtmADss47D~YO2ckSSw1-70UaTghRX1LiLfSZA__"
            ></img>
          </div>
          <div className="my-32">
            <img
              className="w-[426px] h-[641px] rounded-2xl object-cover"
              src="https://s3-alpha-sig.figma.com/img/3708/a364/2cc93e10c62fdcfbc65fcc2ebd1c8aac?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ooUEUqmuYW6QEEGLhZ-TQyqmEogKccyKw8MIecGT8yJx3UsayNCWUp-P3BF4-HStP5RLvnzysustbH5QyYvWxnE9FrbYlQG2U6sPZu2cJ6FPMiqf~Mk8wwmfGMNG8KKDvjnx70a6ohGPmSdOSQo-S6Dv6zLQzQP5v7szHLqtNFMzgWkjzdCqy0X4lwBSwT~x-ImLBDS-yBzbxpu4vvCcIufvrT1e~CofC6OgRudYUW1C7kd0Rz737kyDU-sOHf5GSLyOpIZNRDwUhKBGYs6RxhcXFjNRNHBhkOwTKJn2XQkX6Qn3aI8eZarjweZmh7l3yL7hoVq5zsfD6Q3OUPR2LQ__"
            ></img>
          </div>
        </div>
        <div className="my-40 flex flex-col gap-3">
          <p className="w-20 h-7 border border-blue-700 font-semibold rounded pl-4 ">
            шинэ
          </p>
          <p className="flex text-2xl font-bold items-center gap-3">
            Wildpower Hoodie <CiHeart />
          </p>
          <p>Зэрлэг цэцгийн зурагтай даавуун цамц</p>
          <p className="border-bottom-1px w-40 border-b-2 text-black">
            Хэмжээний заавар
          </p>
          <div className="flex gap-3">
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              S
            </div>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              M
            </div>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              L
            </div>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              XL
            </div>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              XXL
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2 border-black">
              -
            </div>
            <p>1</p>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              +
            </div>
          </div>
          <p className="font-bold text-2xl">120000₮</p>
          <button className="btn btn-primary w-36 h-8 bg-blue-600 rounded-xl text-white">
            {" "}
            Cагсанд нэмэх
          </button>
          <div className="flex gap-3">
            <p>Үнэлгээ</p>
            <p className="w-28 border-b-2">Бүгдийг харах</p>
          </div>
        </div>
      </div>

      <div>
        <p className="font-bold text-3xl py-2">Холбоотой бараа</p>
        <div className="grid grid-cols-4 gap-14 max-w-[1400px] mx-auto mt-12 mb-24  ">
          {baraa.map((b) => (
            <div>
              <div className=" rounded ">
                <img
                  src={b.img}
                  alt="description of image"
                  className=" rounded-xl object-cover size-full overflow-hidden"
                />
                <p>{b.ner}</p>
                <p className="font-bold pb-3">{b.une}₮</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Detail;
