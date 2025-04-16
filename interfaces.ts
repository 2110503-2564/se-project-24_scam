export interface Restaurant {
  _id: string;
  name: string;
  picture: string;
  address: string;
  district: string;
  province: string;
  postalCode: string;
  shortLocation: string;
  tel: string;
  region: string;
  openTime: string;
  closeTime: string;
  rating?: number;
  queue?: string;
}

export interface Reservation {
  _id?: string;
  resDate: Date;
  user: {
    _id?: string;
    name: string;
    tel: string;
  };
  restaurant: {
    _id?: string;
    name: string;
    province: string;
    tel: string;
  };
  seatCount: number;
  createdAt: Date;
}
export interface Review{
  _id?: string,
  user: string,
  restaurant:  {
    _id?: string;
    name: string;
  },
  reviewStar: number,
  reviewText: string,
  createdAt:string
}
export interface MeanReview{
  success:string,
  name:string,
  totalRating:number,
  count:number
}

export interface Profile{
  _id?: string,
  name: string,
  tel: string,
  email: string,
  role: string, 
  createdAt:string
  
}


export interface ProfileJSON{
  success: boolean,
  data: Profile
}

export interface ReviewJSON{
  success: boolean,
  count: number,
  data: Review[]
}
export interface RestaurantJSON {
  success: boolean,
  count: number,
  data: Restaurant[],
  totalPages: number
}

export interface ReservationJSON {
  success: boolean
  count: number
  data: Reservation[]
}

export interface ReviewJSON {
  count: number,
  data: Review[]
}


