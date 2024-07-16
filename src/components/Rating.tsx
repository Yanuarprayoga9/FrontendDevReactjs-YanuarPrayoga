export function RatingReview({ rating}:{rating:number}) {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star,index) => {
          return (  
            <span key={index}
              className={`start font-bold text-2xl cursor-pointer ${rating >= star ? 'text-main-blue' : 'text-gray-800'}`}
            >
           
              ★
            </span>
          )
        })}
      </div>
    )
  }
  