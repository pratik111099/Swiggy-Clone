import ShimmerCards from "./ShimmerCard";

const Shimmer = () => {
    return (
        <div className="shimmer">
            {/* <div className="shimmer-main-header"></div> */}
            <div className="shimmer-search"></div>
            <div className="shimmer-header"></div>
            <div className="shimmer-container">
                <ShimmerCards />
                <ShimmerCards />
                <ShimmerCards />
                <ShimmerCards />
                <ShimmerCards />
                <ShimmerCards />
                <ShimmerCards />
                <ShimmerCards />
            </div>
        </div>
    );
};

export default Shimmer;
