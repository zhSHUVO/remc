import React, { useEffect, useState } from "react";
import defaultBd from "../../assests/images/defaultBg.jpg";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://remc-server.onrender.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    });

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-center content-evenly">
            {reviews
                .slice(0)
                .reverse()
                .map((review) => (
                    <div
                        key={review._id}
                        className="card w-96 bg-neutral text-neutral-content"
                    >
                        <div className="card-body items-center text-center">
                            <div className="flex justify-center">
                                <img
                                    className="w-1/5 mr-5 rounded-full"
                                    src={
                                        review?.image ? review.image : defaultBd
                                    }
                                    alt="profileimage"
                                />

                                <h2 className="card-title">
                                    {review.username}
                                </h2>
                            </div>

                            <p>{review.name}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Review: {review.review}</p>
                            <p> Suggestion: {review.suggestion} </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Review;
