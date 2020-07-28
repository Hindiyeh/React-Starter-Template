const clientId = "0_x397F42VEB34xQkmEM8Q";

const apiKey = "ayzUgc7z2O1WErR6kNAy1LIBklHKq1NW87yIkYBGsV1Do2UCog_k5_pzTqdea6ahH14kNaWUrm6-5NwLswiVMCax-5VMSiHuBYfGvqjqcMxE-8gItPDmTjRvncseX3Yx";

const yelp = {
    search(term, location, sortby) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortby}`,{headers:{Authorization: `Bearer ${apiKey}`}
             }).then(response => {return response.json()
             }).then(jsonResponse => {if(jsonResponse.businesses){return jsonResponse.businesses.map(business => ({id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
             }))}});
    }
  }
export default yelp;