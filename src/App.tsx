import "./App.css";
import { Button } from "./component/Button/Button";
import { Card } from "./component/Card/Card";

import { DatePicker } from "./component/DatePicker/DatePicker";
import {
  ListingAddOnList,
  ListingAddOnProps,
} from "./component/ListingAddOn/ListingAddOn";
import { PageFooter } from "./component/PageFooter/PageFooter";
import { PageHeader } from "./component/PageHeader/PageHeader";
import { Select } from "./component/Select/Select";
import { StarRating } from "./component/StarRating/StarRating";

export type ListingProps = {
  data: {
    listingTitle: string;
    averageRating: number;
    reviewCount: number;
    location: string;
    listingPhotoUrl: string;
    description: string;
    pricePerDay: number;
    serviceFee: number;
    addOns: Omit<ListingAddOnProps, "isAdded">[];
  };
};

function App(props: ListingProps) {
  const { data } = props;
  return (
    <>
      <PageHeader />
      <div className="wrapper">
        <main className="listing">
          <h2>{data.listingTitle}</h2>
          <div className="listingMetadata">
            <div className="starRating">
              <StarRating rating={data.averageRating} />
              <a href="#" className="ratingCount">
                {" "}
                {data.reviewCount} reviews
              </a>
            </div>
            <div className="location">
              <span>📍</span>
              <span>{data.location}</span>
            </div>
          </div>
          <img
            src={data.listingPhotoUrl}
            alt={`Photo of the property ${data.listingTitle}`}
          />
          <section className="listingDescription">
            <h3>Description</h3>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </section>
          <section className="addOnSection">
            <h3>Additional Options</h3>
            <ListingAddOnList addOns={data.addOns} />
          </section>
        </main>
        <aside className="summary">
          <Card>
            <h3>Summary</h3>
            <div className="summaryPrice">
              <span className="summaryPriceValue">${data.pricePerDay}.00 </span>
              <span className="summaryPriceLabel">per day</span>
            </div>
            <form>
              <DatePicker className="input" id="dateCheckIn" label="Check in" />
              <DatePicker
                className="input"
                id="dateCheckOut"
                label="Check out"
              />

              <Select className="input" label="Guests" id="guestCount" />
              <div className="summaryItems">
                <div className="summaryFee">
                  <span className="summaryFeeLabel">Service Fee </span>
                  <span className="summaryFeePrice">$30</span>
                </div>
                <div className="summaryTotal">
                  <span className="summaryTotalLabel">Total </span>
                  <span className="summaryTotalPrice">$300</span>
                </div>
              </div>
              <Button
                label="Book now"
                isFullWidth={true}
                className="summaryBookButton"
              />
            </form>
          </Card>
        </aside>
      </div>
      <PageFooter />
    </>
  );
}

export default App;
