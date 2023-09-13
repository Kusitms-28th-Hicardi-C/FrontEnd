import CustomerList from '../components/reviews/CustomerList';
import CustomerReviews from '../components/reviews/CustomerReviews';
import ReviewsHeaderImage from '../components/reviews/ReviewsHeaderImage';

const ReviewsPage = () => {
  return (
    <>
      <ReviewsHeaderImage />
      <CustomerList />
      <CustomerReviews />
    </>
  );
};

export default ReviewsPage;
