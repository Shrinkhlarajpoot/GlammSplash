/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
 import { v4 as uuid } from "uuid";
import { viewsFormatter } from "../../frontend/utils";
 

export const videos = [
 

  {
	_id: uuid(),
		title: "Katrina's Kaif EveryDay Makeup Look",
		creator: "Nykaa Fashion",
		thumbnail: "https://i.ytimg.com/vi/nsOD3p2PfZk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBYmZiLzxja1XFwe6VGODtTRNYV0A",
		src: "https://www.youtube.com/embed/nsOD3p2PfZk",
		creatorProfile:
			"https://yt3.ggpht.com/61jYa46KdQDqBJnqz8kWnXunhPlznCZDzoSflcx0ym2w4qTI5Yw8VbD7HppbBKneMt_Tw5sOKA=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(190000),
    Category:"makeup",
    PublishDate:"22 Feb 2021",
	desp:"Bollywood Star Katrina Kaif is bound to be a perfect 10/10 even with minimum makeup. She is famous for carrying simple nude makeup looks like no one else giving everybody major makeup goals In this video, Katrina Kaif will show the classic Kay Look that will look good with any outfit using products from her makeup line - Kay Beauty. Katrina's everyday makeup look is super easy to create and will surely make you look stunning!",
	
	},
  {
		_id: uuid(),
		title: "How to do messy voluminious low ponytail| Simple and easy",
		creator: "Beauty school",
		thumbnail: "https://i.ytimg.com/vi/FPXcu43sFPI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBeH-C5L6i_uaSnK-MJZ33JNZYGNA",
		src: "https://www.youtube.com/embed/FPXcu43sFPI",
		creatorProfile:
			"https://yt3.ggpht.com/ytc/AKedOLRyVpJqhqwdd-Adqjp4yBFyNyCqzAMxkn8D-QTb=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(39000),
    Category:"hairstyle",
    PublishDate:"Oct 5 2015",
	desp:"Jessica starts the tutorial with a beach wave in her hair for texture. Gather hair into a loose low ponytail using a thin hair tie. Pull the roots out of the ponytail to make it bigger. Take small pieces of hair by the face out of the ponytail to help frame the face. Using a piece of hair from below the ponytail, wrap the hair around the elastic to cover it up. Add finishing touches to the low ponytail using the Light Elements Defining Whip to give it that messy look.",
	},
  {
		_id: uuid(),
		title: "Get Ready With Janvi Kapoor for Party Looks",
		creator: "Nykaa Fashion",
		thumbnail: "https://i.ytimg.com/vi/CD8PP8SHMPM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACSeit3jqHKMbwv4XWpInFjtI2lA",
		src: "https://www.youtube.com/embed/CD8PP8SHMPM",
		creatorProfile:
			"https://yt3.ggpht.com/61jYa46KdQDqBJnqz8kWnXunhPlznCZDzoSflcx0ym2w4qTI5Yw8VbD7HppbBKneMt_Tw5sOKA=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(1500000),
    Category:"makeup",
    PublishDate:"March 2 2020",
	desp:"If you’re an avid bruncher, you know that the act of going to brunch is more than just a special occasion – it’s a lifestyle, and it’s a time to make a statement with how you look from head to toe. The key to a beautiful brunch beauty look is about creating effortless looking, sun-kissed glow! Actress Janhvi Kapoor shows us a fresh-faced, minimal makeup look because it’s simple, quick and pretty without looking overdone",
	},
  {
		_id: uuid(),
		title: "Indian Brown Smokey Eyes for beginners in just one video",
		creator: "Shivangi Sharma",
		thumbnail: "https://i.ytimg.com/vi/L-WzQwt3FHo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBM4I9jAfnpG70ffL_wsM0AaSebPA",
		src: "https://www.youtube.com/embed/L-WzQwt3FHo",
		creatorProfile:
			"https://yt3.ggpht.com/qWvsOjGeUOhU9kC1qF_-zcjSlg2sIxi32OfJBnDw8EvTvZr0pXR67B7gXrmk-kfg2_V66Cg7Sw=s68-c-k-c0x00ffffff-no-rj",
		views:viewsFormatter(107380),
    Category:"makeup",
    PublishDate:"Feb 1 2016",
	desp:"Welcome to my SMOKEY EYE Series!!!!Here's tutorial 1 from my smokey eye series which is a super easy, affordable, sexy, sultry, feline smokey eye. I find this super easy and it works with a lot of looks and outfits! Do try it out and let me know how it went!",
	},
	
  {
		_id: uuid(),
		title: "Simple and cute hairstyle for everyday",
		creator: "VeeZee Vlogs",
		thumbnail: "https://i.ytimg.com/vi/ugoriVB_UHg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCd-CHwNB_nehzGD2kCaRAto621Pw",
		src: "https://www.youtube.com/embed/ugoriVB_UHg",
		creatorProfile:
			"https://yt3.ggpht.com/ytc/AKedOLSC1Pc-1Lmh4-AS8jQkRQoaECYfBcFqeme_xXY2jA=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(56000),
    Category:"hairstyle",
    PublishDate:"Sep 10 2011",
	desp:"Hi guys welcome back to my channel ❤️ I know I uploaded this video after here's are some sexy hairstyle you can try and enchance your collge looks.❤️",
	},
  {
		_id: uuid(),
		title: "Istagram Baddie Makeup Tutorials for a daily college looks ",
		creator: "Shaanxoo",
		thumbnail: "https://i.ytimg.com/vi/PSHafZQTDtI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQbU-yvO3kqHyquxJWHg0h4eL5_w",
		src: "https://www.youtube.com/embed/PSHafZQTDtI",
		creatorProfile:
			"https://yt3.ggpht.com/ytc/AKedOLQ29u6uM4CzIxqL7iemhBQVRjDaVhJchqfHpTFctw=s88-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(158580),
    Category:"makeup",
    PublishDate:"Dec 20 2011",
	desp:"Today i'm doing a makeup tutorial inspired by INSTAGRAM BADDIES! I even cream contoured haha using my kit from http://www.iconiclondoninc.com/ xx- GIANT KOREAN BEAUTY HAUL https://www.youtube.com/watch?v=ODxJC...- MOST FUN EVER https://www.youtube.com/watch?v=JBila...- New videos every Mon, Wed and Fri! http://bit.ly/shanxo Subscribe for FREE! :)",
	},
  {
		_id: uuid(),
		title: "Easy Skincare Tips that Make a BIG Difference in Your Skin.Skincare with Mixed Makeup",
		creator: "Mixed Makeup",
		thumbnail: "https://i.ytimg.com/vi/Jhv2hp8nKVQ/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBfq6i3AmptKkIO__79rpN78uHi3Q",
		src: "https://www.youtube.com/embed/Jhv2hp8nKVQ",
		creatorProfile:
			"https://yt3.ggpht.com/ytc/AKedOLSC1Pc-1Lmh4-AS8jQkRQoaECYfBcFqeme_xXY2jA=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(145000),
    Category:"skincare",
    PublishDate:"Mar 27 2017",
	desp:"Skincare doesn't have to be complicated. Sometimes all it takes is making a few small and easy changes to your skincare routine to see a BIG difference in your skin. Whether you're dealing with clogged pores, acne, dry skin, oily skin, or something else, you'll be sure to see results if you apply some of these easy skincare tips. What are some of your favorite skincare tips? Share in the comments!",
	},
  {
		_id: uuid(),
		title: "My Everday Makeup Routine",
		creator: "JessContee",
		thumbnail: "https://i.ytimg.com/vi/JBccaPlNleg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOmjyYe7EZ55xE1pbtRbIgQhuBNg",
		src: "https://www.youtube.com/embed/JBccaPlNleg",
		creatorProfile:
			"	https://yt3.ggpht.com/ytc/AKedOLS39WTYrWDJBlqf3L5IFhazrDv5mwiY-D7NUTo_cg=s88-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(7093728),
    Category:"makeup",
    PublishDate:"Oct 15 2000",
	desp:"Skincare doesn't have to be complicated. Sometimes all it takes is making a few small and easy changes to your skincare routine to see a BIG difference in your skin. Whether you're dealing with clogged pores, acne, dry skin, oily skin, or something else, you'll be sure to see results if you apply some of these easy skincare tips. What are some of your favorite skincare tips? Share in the comments!",
	},
  {
		_id: uuid(),
		title: "My Skincare secret to glow| Morning and Night Routiene",
		creator: "Michu",
		thumbnail: "https://i.ytimg.com/vi/i12qoFusE4w/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDwU9fFlwYcDq4VtnGejSVN3Prn2Q",
		src: "https://www.youtube.com/embed/i12qoFusE4w",
		creatorProfile:
			"https://yt3.ggpht.com/ytc/AKedOLTFl8kpVaRWk1oPO4ilOTP0C3SvdZ2gorjsMkaf=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(137000),
    Category:"skincare",
    PublishDate:"April 20 2019",
	desp:"Skincare doesn't have to be complicated. Sometimes all it takes is making a few small and easy changes to your skincare routine to see a BIG difference in your skin. Whether you're dealing with clogged pores, acne, dry skin, oily skin, or something else, you'll be sure to see results if you apply some of these easy skincare tips. What are some of your favorite skincare tips? Share in the comments!",
	},
  {
		_id: uuid(),
		title: "10 easy heartless back to school braided hairstyles",
		creator: "Roxxsuras",
		thumbnail: "https://i.ytimg.com/vi/X5-89u7sLWg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBojSoC-YaEhfcPkfTomFf9iKmd1Q",
		src: "https://www.youtube.com/embed/X5-89u7sLWg",
		creatorProfile:
    "https://yt3.ggpht.com/ytc/AKedOLRDabnuXL0w8SFE4dhY3OMPHdEdlBT_WrlA4n4eno4=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(580000),
    Category:"hairstyle",
    PublishDate:"June 20 2007",
	desp:"Skincare doesn't have to be complicated. Sometimes all it takes is making a few small and easy changes to your skincare routine to see a BIG difference in your skin. Whether you're dealing with clogged pores, acne, dry skin, oily skin, or something else, you'll be sure to see results if you apply some of these easy skincare tips. What are some of your favorite skincare tips? Share in the comments!",
	},
  {
		_id: uuid(),
		title: "My Night skincare routine,Special for this summer.Do try and see the results.",
		creator: "Michu",
		thumbnail: "https://i.ytimg.com/vi/cguo593jWsw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBMF0xEKyNS_yeso3Vw-MuGVyv3aw",
		src: "https://www.youtube.com/embed/cguo593jWsw",
		creatorProfile:
			"https://yt3.ggpht.com/ytc/AKedOLRDabnuXL0w8SFE4dhY3OMPHdEdlBT_WrlA4n4eno4=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(137000),
    Category:"skincare",
    PublishDate:"April 20 2019",
	desp:"Skincare doesn't have to be complicated. Sometimes all it takes is making a few small and easy changes to your skincare routine to see a BIG difference in your skin. Whether you're dealing with clogged pores, acne, dry skin, oily skin, or something else, you'll be sure to see results if you apply some of these easy skincare tips. What are some of your favorite skincare tips? Share in the comments!",

	},
  {
		_id: uuid(),
		title: "Sabira Carpenter's 10 Minute Makeup Routiene for Natural Light",
		creator: "Allure",
		thumbnail: "https://i.ytimg.com/vi/h4vFpXImJZY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBjPcRZwm6Ob7hnAPNXy3zt-n5MEQ",
		src: "https://www.youtube.com/embed/h4vFpXImJZY",
		creatorProfile:
			"https://yt3.ggpht.com/ytc/AKedOLTh3CzVjywnuL9xsr13NtrbPs0-17AHUvhtmnmQ6G4=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(998),
    Category:"makeup",
    PublishDate:"Nov 20 2021",
	desp:"If you’re an avid bruncher, you know that the act of going to brunch is more than just a special occasion – it’s a lifestyle, and it’s a time to make a statement with how you look from head to toe. The key to a beautiful brunch beauty look is about creating effortless looking, sun-kissed glow! Actress Janhvi Kapoor shows us a fresh-faced, minimal makeup look because it’s simple, quick and pretty without looking overdone",
	},
  {
		_id: uuid(),
		title: "My morning Skincare routiene for glowing and smoothy skin in just few minor steps.",
		creator: "Sunny Vloet",
		thumbnail: "https://i.ytimg.com/vi/ntURgYm_Oes/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLALK6-gUli4HznO5QfgdIS-c6sD0Q",
		src: "https://www.youtube.com/embed/ntURgYm_Oes",
		creatorProfile:
			"https://yt3.ggpht.com/ytc/AKedOLQej2xd6sAkQA5BEC3XCzC6unJivtDJAOZrX350=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(998908),
    Category:"skincare",
    PublishDate:"Oct 15 2018",
	 desp:"",
	},
  {
		_id: uuid(),
		title: "The No makeup look look by Hina Khan",
		creator: "Hina Khan",
		thumbnail: "https://i.ytimg.com/vi/iRP-FBMRxJk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAQeD-q2sQU4QVLiEDZpG3g3E2x1g",
		src: "https://www.youtube.com/embed/iRP-FBMRxJk",
		creatorProfile:
			"	https://yt3.ggpht.com/ytc/AKedOLTJa17prUeB_CrtukXXuhYESj6GENQIxLtFiUJZew=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(500000),
    Category:"makeup",
    PublishDate:"April 20 2019",
	desp:"If you’re an avid bruncher, you know that the act of going to brunch is more than just a special occasion – it’s a lifestyle, and it’s a time to make a statement with how you look from head to toe. The key to a beautiful brunch beauty look is about creating effortless looking, sun-kissed glow! Actress Janhvi Kapoor shows us a fresh-faced, minimal makeup look because it’s simple, quick and pretty without looking overdone",
	},
  {
		_id: uuid(),
		title: "Type of Hairstyle according to your face shape.Try it now ",
		creator: "The Trendy Girl",
		thumbnail: "https://i.ytimg.com/vi/ZROc97mxgLY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4cWtaEGWeFFKkcSNsZb5JuYOd6g",
		src: "https://www.youtube.com/embed/ZROc97mxgLY",
		creatorProfile:
			"	https://yt3.ggpht.com/ytc/AKedOLQIOQBUbHr5hBW1cgbrV5G9pydwmoyCBF_LL9n7CA=s68-c-k-c0x00ffffff-no-rj",
		views: viewsFormatter(580000),
    Category:"hairstyle",
    PublishDate:"Oct 14 2014",
	desp:"Figuring out what face shape you have can be difficult. This will help you figure that out and discover what haircut will best suit you!",
	},

];
