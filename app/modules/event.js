
import _ from 'lodash';
const getEventData = () => {
  const list = [
    {
        "stats": {
            "listing_count": 2,
            "average_price": 131,
            "lowest_price": 111,
            "highest_price": 151
        },
        "short_title": "Norah Jones",
        "image": "https://image.shutterstock.com/z/stock-photo-speaker-giving-a-talk-on-corporate-business-conference-audience-at-the-conference-hall-business-481869205.jpg",
        "name": "Teatro Degli Arcimboldi",
        "url": "http://seatgeek.com/teatro-degli-arcimboldi-tickets/",
        "location": "Milan, Milan",
        "date_utc": "2020-07-10T05:00:00",
        "ev_id": 879131
    }, {
        "stats": {
            "listing_count": 0,
            "average_price": 0,
            "lowest_price": null,
            "highest_price": null
        },
        "short_title": "Wintersleep",
        "image": "https://image.shutterstock.com/image-photo/rear-view-asian-audience-joining-600w-1585660945.jpg ",
        "name": "Bitterzoet",
        "url": "http://seatgeek.com/bitterzoet-tickets/",
        "location": "Amsterdam, North Holland",
        "date_utc": "2020-06-11T13:00:00",
        "ev_id": 954786
    }, {
        "stats": {
            "listing_count": 0,
            "average_price": 0,
            "lowest_price": null,
            "highest_price": null
        },
        "short_title": "Silver Apples",
        "image": "https://image.shutterstock.com/image-photo/banner-abstract-blurred-photo-conference-600w-1336362089.jpg",
        "name": "The Lexington",
        "url": "http://seatgeek.com/the-lexington-tickets/",
        "location": "London, London",
        "date_utc": "2020-07-16T19:00:00",
        "ev_id": 1020837
    }, {
        "stats": {
            "listing_count": 0,
            "average_price": 0,
            "lowest_price": null,
            "highest_price": null
        },
        "short_title": "Rue Royale",
        "image": "https://image.shutterstock.com/image-photo/comox-valleyvancouver-islandbc-canada-july-600w-681064585.jpg",
        "name": "Hall",
        "url": "http://seatgeek.com/hall-tickets/",
        "location": "Heidelberg, BB",
        "date_utc": "2020-07-08T16:00:00",
        "ev_id": 1037471
    }, {
        "stats": {
            "listing_count": 0,
            "average_price": 0,
            "lowest_price": null,
            "highest_price": null
        },
        "short_title": "Musik Quickie Nr. 110",
        "image": "https://image.shutterstock.com/image-photo/silhouettes-concert-crowd-front-bright-600w-794207152.jpg",
        "name": "Feldstern",
        "url": "http://seatgeek.com/feldstern-tickets/",
        "location": "Hamburg, ",
        "date_utc": "2020-06-18T19:00:00",
        "ev_id": 1048714
    }, {
        "stats": {
            "listing_count": 0,
            "average_price": 0,
            "lowest_price": null,
            "highest_price": null
        },
        "short_title": "Capital Cities",
        "image": "https://image.shutterstock.com/image-photo/speaker-business-conference-hallpublic-giving-600w-462588733.jpg",
        "name": "Keller Klub",
        "url": "https://image.shutterstock.com/image-photo/shiny-rainbow-confetti-during-concert-600w-552730561.jpg",
        "location": "Stuttgart, BW",
        "date_utc": "2020-05-18T17:00:00",
        "ev_id": 1050757
    }, {
        "stats": {
            "listing_count": 7,
            "average_price": 90,
            "lowest_price": 70,
            "highest_price": 110
        },
        "short_title": "Amen Dunes",
        "image": "https://image.shutterstock.com/image-photo/microphone-over-abstract-blurred-photo-600w-1196667214.jpg",
        "name": "The Shacklewell Arms",
        "url": "http://seatgeek.com/the-shacklewell-arms-tickets/",
        "location": "London, Hck",
        "date_utc": "2020-05-13T19:00:00",
        "ev_id": 1064241
    }, {
        "stats": {
          "listing_count": 5,
          "average_price": 110,
          "lowest_price": 80,
          "highest_price": 140
        },
        "short_title": "Bloody Mammals",
        "image": "https://image.shutterstock.com/image-photo/shiny-rainbow-confetti-during-concert-600w-563382502.jpg",
        "name": "Bloomsbury Bowling Lanes",
        "url": "http://seatgeek.com/bloomsbury-bowling-lanes-tickets/",
        "location": "London, Wsm",
        "date_utc": "2020-06-01T05:00:00",
        "ev_id": 1072097
    }, {
        "stats": {
            "listing_count": 0,
            "average_price": 0,
            "lowest_price": null,
            "highest_price": null
        },
        "short_title": "Hey Sholay",
        "image": "https://image.shutterstock.com/image-photo/pretty-young-business-woman-giving-600w-176222933.jpg",
        "name": "The Hoxton Square Bar and Kitchen",
        "url": "http://seatgeek.com/the-hoxton-square-bar-and-kitchen-tickets/",
        "location": "London, Lnd",
        "date_utc": "2020-06-01T19:00:00",
        "ev_id": 1072148
    }, {
        "stats": {
          "listing_count": 4,
          "average_price": 90,
          "lowest_price": 70,
          "highest_price": 110
        },
        "short_title": "More Than Conquerors",
        "image": "https://image.shutterstock.com/image-photo/moscow-russia-april-24-2017-600w-632134928.jpg",
        "name": "Sticky Mike's Frog Bar",
        "url": "http://seatgeek.com/sticky-mike-s-frog-bar-1-tickets/",
        "location": "Brighton, Bnh",
        "date_utc": "2020-06-13T09:00:00",
        "ev_id": 1076847
    }
  ]
  return list;
}
export const evList = getEventData();