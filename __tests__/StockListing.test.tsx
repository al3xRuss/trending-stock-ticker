import { mockedCompanyProfile } from "../__mocks__/mocks";
import { StockListing } from "../components/StockListing";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

function getDecemil(num: number) {
    return Math.abs(Math.round((num + Number.EPSILON) * 100) / 100)
}

describe("An Individual StockListing", () => {
    it("Returns Mock Data Back For Apple Inc", () => {
        render(<StockListing companyProfile={ mockedCompanyProfile } />);
        
        const pC = `${getDecemil(mockedCompanyProfile.quote ? mockedCompanyProfile.quote.dp : 0)}%`
        const companyName = screen.getByText("Apple Inc");
        // const symbol = screen.getByText("AAPL");
        // const currentPrice = screen.getByText("$84.32");
        // const change = screen.getByText("-$1.17");
        const percentChange = screen.getByText(pC);

        expect(companyName).toBeInTheDocument();
        expect(percentChange).toBeInTheDocument();
    })

    it("Check News Toggle", () => {
        render(<StockListing companyProfile={ mockedCompanyProfile } />);

        const listing = screen.getByTestId("listing");
        const newsContainer = screen.getByTestId("news-container");
        
        //open
        fireEvent.click(listing);
        expect(newsContainer).toHaveClass("max-h-max");

        //close
        fireEvent.click(listing);
        expect(newsContainer).toHaveClass("max-h-0");
    })
})