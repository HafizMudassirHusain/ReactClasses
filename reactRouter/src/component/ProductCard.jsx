function ProductCard({image, title, category, description, price}){
    return(
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={image}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {title}
            </h2>
            <h3 className="text-gray-500 mb-3">{category}</h3>
            <p className="mb-4">
              {description}
            </p>
            <span className="inline-flex">
                <h4>{price}</h4>
            </span>
          </div>
        </div>
      </div>
    )
}
export default ProductCard;