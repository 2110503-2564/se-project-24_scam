
// import { Pattaya } from "next/font/google";
import {  Rating } from "@mui/material";
import { ReviewItem,MeanReviewItem, ProfileJson, RestaurantJson, ReviewJson,RestaurantItem,ProfileItem } from "../../interfaces";
import ClientRating from "./ClientRating";
import Link from "next/link";

// const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] });
export default async function ReviewCatalog({reviews,restaurant,meanReviews,profile,page}:
    {reviews:Promise<ReviewJson>,restaurant:Promise<RestaurantJson>,
        meanReviews:Promise<MeanReviewItem>,profile:Promise<ProfileJson>,page:number}) {

    const reviewsready=await reviews
    const restaurantready=await restaurant
    const meanReviewsready=await meanReviews
    const profileready=await profile



  return (
    <div className="">
      {/* <h1 className={pattaya.className} style={{ fontSize: "48px" }}>{restaurantready.data.name} Restaurant Reviews</h1> */}

      <div className=" text-left font-bold text-xl ">Reviews Ratings {restaurantready.data.name}</div>

      <div className="flex flex-row items-center justify-between border p-4 w-full bg-[#FFECAD] my-5 ">
        <div className=" flex flex-row text-left font-bold text-lg items-center">
          <div className="flex flex-row mr-5 text-3xl">
            {meanReviewsready.totalRating }
            <div className="text-orange-500 ">/5.00</div>
          </div> 
                <ClientRating rating={Number(meanReviewsready.totalRating)}/>
        </div>
        <div className=' text-right font-bold text-lg'>from {meanReviewsready.count} reviews</div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          reviewsready.data.map((review:ReviewItem)=>(
          <div className="bg-[#FFECAD] p-4"
          key={review._id}>
            <div className='text-left'>User : {review.user}</div>
            <div className='text-left font-bold'>Star : {review.reviewStar}</div>
            <div className='text-left'>
              <ClientRating rating={Number(review.reviewStar)}/>
            </div>
            <div className='text-left'>Description : {review.reviewText}</div>
                  
          </div>
          ))
        }    
      </div>

      {page>1?
        <div className="absolute left-5 bottom-5">
          <Link href={`/restaurants/${restaurantready.data._id}/reviews?page=${page-1}`}>
            <button className="font-serif  bg-[#F89640] 
              hover:bg-green-600 px-4 py-2 text-white shadow-sm">
              « Previous
            </button>
          </Link>
        </div>
      :null}
      
      {page<reviewsready.totalPages?
        <div className="absolute right-5 bottom-5">
          <Link href={`/restaurants/${restaurantready.data._id}/reviews?page=${page+1}`}>
            <button className="font-serif  bg-[#F89640] 
              hover:bg-green-600 px-4 py-2 text-white shadow-sm">
              Next »
            </button>
          </Link>
        </div>
      :null}
      
            
    </div>
  );
}
