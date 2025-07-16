// Shared products data for the ecommerce application
export const products = [
  // Electronics - Featured Products
  {
    id: 1,
    name: 'iPhone 15 Pro Max - 256GB',
    currentPrice: 134900,
    originalPrice: 159900,
    rating: 4.8,
    reviews: 2847,
    category: 'Electronics',
    image: 'data:image/jpeg;base64,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',
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system with 5x telephoto zoom.',
    features: [
      '6.7-inch Super Retina XDR display with ProMotion',
      'A17 Pro chip with 6-core GPU',
      'Pro camera system with 5x telephoto',
      '256GB Storage',
      '5G connectivity with Wi-Fi 6E'
    ],
    feedback: [
      { user: "Tech Reviewer", rating: 5, comment: "Best iPhone ever made! Camera quality is incredible and titanium build feels premium." },
      { user: "Professional Photographer", rating: 5, comment: "5x telephoto zoom is a game changer. Night mode photos are stunning!" },
      { user: "Business User", rating: 4, comment: "Excellent performance but expensive. Worth it for the features." }
    ]
  },
  {
    id: 2,
    name: 'MacBook Air M3 - 13 inch',
    currentPrice: 114900,
    originalPrice: 124900,
    rating: 4.9,
    reviews: 1523,
    category: 'Electronics',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1653084303665',
    description: 'Ultra-thin laptop powered by M3 chip with all-day battery life and stunning Liquid Retina display.',
    features: [
      'Apple M3 chip with 8-core CPU',
      '13.6-inch Liquid Retina display',
      '8GB unified memory',
      '256GB SSD storage',
      'Up to 18 hours battery life'
    ],
    feedback: [
      { user: "Software Developer", rating: 5, comment: "Perfect for coding! M3 chip handles everything smoothly and battery lasts all day." },
      { user: "Creative Professional", rating: 5, comment: "Amazing for video editing and design work. No lag whatsoever!" },
      { user: "Student", rating: 4, comment: "Great laptop for studies. Lightweight and powerful but pricey." }
    ]
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Headphones',
    currentPrice: 29990,
    originalPrice: 34990,
    rating: 4.7,
    reviews: 3421,
    category: 'Electronics',
    image: 'https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpg&wid=400&bgcolor=FFFFFF&bgc=FFFFFF',
    description: 'Industry-leading noise cancellation with crystal-clear hands-free calling and Alexa voice control.',
    features: [
      'Industry-leading noise cancellation',
      '30-hour battery with quick charge',
      'Multipoint connection for two devices',
      'Speak-to-chat technology',
      'Premium comfort and sound quality'
    ],
    feedback: [
      { user: "Music Lover", rating: 5, comment: "Best noise cancellation I've experienced! Sound quality is phenomenal." },
      { user: "Frequent Traveler", rating: 5, comment: "Perfect for long flights. Comfort is amazing and battery lasts forever." },
      { user: "Office Worker", rating: 4, comment: "Great for work calls and focus. Worth the investment." }
    ]
  },
  {
    id: 4,
    name: 'Samsung 65" Neo QLED 4K TV',
    currentPrice: 129999,
    originalPrice: 149999,
    rating: 4.6,
    reviews: 892,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=500&fit=crop',
    description: 'Quantum Matrix Technology with Mini LEDs delivers brilliant 4K picture quality and immersive sound.',
    features: [
      '65-inch Neo QLED 4K display',
      'Quantum Matrix Technology',
      'Smart TV with Tizen OS',
      'Object Tracking Sound+',
      'Gaming Hub with cloud gaming'
    ]
  },

  // Fashion - Trending Items
  {
    id: 5,
    name: 'Nike Air Jordan 1 High',
    currentPrice: 12795,
    originalPrice: 14995,
    rating: 4.8,
    reviews: 2156,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    description: 'Iconic basketball shoe with premium leather upper and classic colorway. A timeless sneaker legend.',
    features: [
      'Premium leather construction',
      'Classic Air Jordan design',
      'Comfortable cushioning',
      'Durable rubber outsole',
      'Available in multiple sizes'
    ]
  },
  {
    id: 6,
    name: 'Levi\'s 511 Slim Jeans',
    currentPrice: 3499,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 1834,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    description: 'Classic slim-fit jeans made from premium denim with just the right amount of stretch for all-day comfort.',
    features: [
      'Slim fit through hip and thigh',
      'Premium stretch denim',
      'Classic 5-pocket styling',
      'Machine washable',
      'Authentic Levi\'s quality'
    ]
  },

  // Home & Living
  {
    id: 7,
    name: 'Dyson V15 Detect Absolute',
    currentPrice: 59900,
    originalPrice: 65900,
    rating: 4.9,
    reviews: 1456,
    category: 'Home',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Dyson_V15_Detect.jpg?VersionId=nOVkkV3T.q5FSEi0RHzUxB3QXl2ua2s1',
    description: 'Most powerful cordless vacuum with laser detection technology that reveals microscopic dust.',
    features: [
      'Laser Slim Fluffy cleaner head',
      'LCD screen shows real-time data',
      'Up to 60 minutes runtime',
      'Advanced whole-machine filtration',
      'Converts to handheld vacuum'
    ]
  },
  {
    id: 8,
    name: 'Philips Smart Air Fryer XXL',
    currentPrice: 16995,
    originalPrice: 19995,
    rating: 4.6,
    reviews: 2341,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
    description: 'Smart air fryer with app connectivity, 90% less fat cooking, and family-sized 7.3L capacity.',
    features: [
      '7.3L capacity serves up to 6 people',
      'Smart app with 200+ recipes',
      'Rapid Air technology',
      'Dishwasher-safe parts',
      'Smart presets for easy cooking'
    ]
  },

  // Books - Bestsellers
  {
    id: 9,
    name: 'Atomic Habits by James Clear',
    currentPrice: 1499,
    originalPrice: 1899,
    rating: 4.9,
    reviews: 8947,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
    description: 'The life-changing million-copy bestseller on building good habits and breaking bad ones.',
    features: [
      'Paperback edition - 320 pages',
      'New York Times #1 bestseller',
      'Practical habit-building strategies',
      'Based on scientific research',
      'Easy-to-understand framework'
    ]
  },
  {
    id: 10,
    name: 'Think and Grow Rich - Napoleon Hill',
    currentPrice: 999,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 5623,
    category: 'Books',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGCAbGBgXGBcfHxgYHRgYFhodFx4aHSggHRolHRcaITEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLS0tLTItLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABCEAACAQIEAwYCCAMECwEAAAABAhEAAwQSITEFQVEGEyJhcYEykQcUI0JSobHBYtHwcoKS4RUWJDNDU2NzorLC8f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAvEQACAgEDAgMHAwUAAAAAAAAAAQIRAxIhMQRBE1FxIiMyYZHB8IHR4RQzQqGx/9oADAMBAAIRAxEAPwBmqK/fVdzr05n0qv3ly58IyL1O/sOVW8Jw8DWNeZO/zrhjjb5NXIqr3j7eBfz/AMqvYXh4XX5k7/OpL2It2xqaE4nij3NEEDrV3GKJScgnisdbtjfWg2J4jcuaDQVrbw3NjJ6mo72OUGEGZuvKsZZvI3hh8zU2FXV29zVPE8S5Wx/eP7Vrbwl2++gJPnsKZOF9lADNwyfyFKGKeQcskICxhOG3bxkAx+I/tTXwvsyiQz6nqf2oyz27YgAUD4px0LOtdUYQx/NnNKc5hW9iUtiBFLnFuPgTrS5xPtAWmDS5iMWWO9Dk5DjBIJ8T42zbHSgV6+TWrtTJ2A7PfWr+ZxNm1BadmbcKfLmfbrQkU2oq2Wux/YC9i4u3Jt2TsfvP/ZHIeZrrXCeEWcMgs2raqB1O/UseZNXMLfCxpAiBroI6DeqzrDGTLNufwryA8zzrTg5JTcuSPjGAs/VLvforK5BYEDxGRlH5Ae1CcD8IAQW05KI0HtR/ioNwC2olRueVArthrXw+Jea8x/Zry+tc27Udl3O/pZRxpW+fqDuN3/uj38+lU+E287sOeRo9YrfiPibMOf5etV8NKHPsRt5/5V83mbnKW5y5cl5W35g2/wALZil3MLZUxLT4l5gAan12q3YIdsiqWKiY0GbyH9da1xF0sddSeQopgez90rMZebEz7D2/U1144yy0owuvz0oxRWwNtrrZ2ERv5HoB0FFraKvWtLco/dkZgfvx94fFNbg13Rx+HGu57HSx0wo2yr+E/KsqHvB/RrKLZ00eYfFkmVSE/E3P0FVsbxJvhX51dxpJUkAkAUBt45ByJ869XJk08nm48ergmTDljLGT57CtruJRdBq3QVA95rmi7dB+9R40JhwhvK/2jEKEjSFLEtpJEDlWMYzyvY2bjDkjus9wxBPkNvejfC+zBMNd+Q5VLgOK4e2A2Q92RPeAoRMxB1mfavf9cMOysc7JBAhl1kgkCATrptvrtXTjwwju92c+TLOWy2DaW7doQANKG8Q4yBzoNi+OI7FLd1Scs6rcGh/uH+iKWOLM+bK1xJOy+Nc3oXUA1o5N7IyjBcsIcV7RzIWljFY1nOpmpm4XeMeFTIkRctmdY08XXT1B6GosTwnELM2bmm8KTGk8p5a1Kia7FF261Xd6M8J7MYvEvkSyy9WcFQB7jX2mum9nOwOHw0PcHfXepHhU/wAI/cyajJljDkqMW+DnXZ7sTicVDEd1a/G41I/hHP1MU/cO4euFjC4eW+87HcmBJP5U23D10jlS9w8AO+urks56D+Q2rPDklkk32Rl1aUYpd2GOF4YJ4icxnc9f5CrF91TxMdBrrQ08Ug5VUkDXzjlP9c6ocR4iHYAAlmHhU8h1PmTXQnW3c462LA4wbrtBKoDEid+dZjcXMNpl2J6HaazDW+7UKTLHQAczz9h1qp2gLJaW3ZC5i+x2I1DT7msOq+B26Rv02RQyWye7h1Oux60LvWC7aa+Y0A9elWMzZAGacgExqWPku52NXOG4dSTnJBMQo1CDq0bmvFxdKuplq4j5+fp+5fU54zdRRZ4Fwy1bObRn8yPy6UTxvgRmzaEyR+3zrMFYVYyrmJ2G3z00rOI40IkOLYzHQEqFiRqSdR0Fe7UcOJqKpJHNFWKmcib+Je6veT3aqcugEgmPhk7UQzi7YW4coObL8QJYR96I1nnGoNLlqy1vEth71wspBuWZJOhaGQk6kKSCPI1bXCYjFNcIyIgBUZmgvGgI0gDlyrw1jyxTkuP+/wAnbD3crs8bilgEg3E003rK1TgODgTbvzGv2V7f2WPlWV3+DD5/n6m/9ahlidOVU04LbmcooloN6hu4wDavXko/5HDFy7G1rConIUk/SXjlD4SR4Qbhgbk5FAjzkijmP4wq7mkvjWIXEX7AceEZ4mdT9m0aDSQp/wAqMc7e3FMpxfLA2ELstw22ItgyTOmbbwACJOo0EkzttRw8NKW1u3MM7MFKi2A4+KIjKDkg6E9NdTVfhdwtkHc2ghdSPjGsgT8cfENOWwo9x3tY+Hviytlbn2Yck3AkAsV1JEchz50qspM84XYAfOtpkuMYOcaBfDudCSQOR+7qeVBe3VhEtswuaqVlGJMEkkFSfef8iavHt84nNg7gjeGmP/GsP0gWpKvh74IEkQpgdSCRA86lY3dlN7Arsf2gH/EKeCMrNBMnNsxE8gNTyovdDPYuMTnuSTMxAEEAfdAO5iBr11rP9cMHMNauIY1DWRMeccq3t9p+GkFZVQdwbTDz1hetDx96BSrYqcNZzmZS0kF/F4gGOkKAdVlZI22os3ErtuyGDM7MNWzsNTrpGyzpEVFY4nw2Sy3bSkmSczLrtzI5AD00qZ/qdwBReSASRFxdCZ11PmahwKUiJePYhbcM9xydcwKmfC4I8TeEbHpoOZq5wribsp68w2XUiTAyKJ8obXyIMaYXhVlTK3C3qytyjpJ99T7CIm4DDs63WGYklSMwg7ga6Lz8tOgoUfITp8o3wPaptQLarmBJDB8396CY+VbWOPWrRe66DTKA2fU/EsZYMQVOknUGYoZjez154AvKQDJBUrmIIy5sh1URsd+teNwXEQwD2/Fr6Npr8PLKDpz1jSKFCnYmotUwynaBFuNcuJcM+AZRKqRGZVYwD4p8WkwNK34hxVb1tmRXtuUIXOBKjr4S3l6xzoHicFickJaEqmVPEsAaAwJE7c45io7C4sfFbMs2YzBgBfhlZ57R086yyYFljplxdkrHFPY34FgMTZYC5ePdnW4EaHfeJe4oIE6GD+1NV3HiRbtFFJGozqTyG5Ou4E0qNiHdcjWLigeFEysFAmOSxtrPWDXlu53dovcdpQ6bAyDAXXSYga6EtMwJrRw7EPDF9x4sOwXM0mBynny067UF43ixcnKjAFcpEEgjpHl/nS7em5aUi0SSZ+GZGpYIsHSTrHUmo7eYXEcrdT8REqYBAIcNEqR97cagHlUOFqhxwqIS4DgW7/C5mLQt0gH7qLCgf4p08qZ7WD7he8vOgTN4ZJ1EknTkB+1AV413bm8fiXv7ZkHfvTl36rlI8jSd2z49iMVct4dFd3g5mtywOsjKF0hRMn+VeXpc8zhHhfQ6NCilI6Y30h8PBI786aaW2/KsrhrZASDdtyNDJ1nnPnXtdP8ATw82YWdux3FQBqaW+IceJ2MUv4ziTMd6oPd867ueTVJIv4nHsTv71R7497bI1IDxvrIVP/qfaqz3asYO0WIKkBgrEEgmPEpOg1JhTArXF39CZ8BLg1h2vqqIMiujMHifinQHTwxMydgRTNxfssuIvd/31224UJ4MsQNeYn7xpY4BiE+tWlRCJaCxkTEnQa9OZ5U7cSwDXjbXOyIrl2KMVYkAqqgjYGSSf4Y51V0yFwL79hHiFxjbAeO2raAlh97qxM+dVL3YLEFmb60jFlyktbIldNNCegop24vXMJhGu2b11XDKBmYMNTBkODyoz9QvZfDi7maPvpZImOYW2pj3qtbW+30QUJ1zsjjhcNxXw5YrlmXGkg81OunOob3ZjGTLWLTnNm8NwCSSzGcw1HiP5U0XcTirWAN5mQ3raPccOhholsoClSAAIB9JmrHZXiF7EWEv3RbUODCoG2DEAkljvExHMUrXkhiHb7PYhAA2BLRGue2SQGLakazBjSNtZGlVm4VcVmLYO6AQIAts4UgDNpIkEzrMia6rj7zojOqB8oJK5spgAk5dCCfIx61S7O8a+tp3i2XRJIDMV1I3gAz+VPX+Wx0cvbC2l+K1fT4ZJUiN8x1nXb16CohiEC+HEXVbJMB2HjjVdBtP9CupcQ7RWrFxbd1bqs5hITNn1yjLkJ3JGm+u1TY/E2VQPdWF5lrbaf2/Cco8zFCl6/UDmeH4jdypGNuKSPFmcGDI5E6RJ3M+EwDU68cxqq7fWgQoBEi2c0idIHXTXnT5h8BgsQguJasXFMwwRDMGDrFRXuyuCIk4dB6Er/6kUJx/Ehbivb7RY4KrB7DBhIBQz8OfXKRyDf4fMVvc7Y4u2ua5YtQJkgkbMFP3jzYfOjp7DYLdUdfMXH/cmom7BWfu3sQmkaOsRpp8O2g+QoSjf8fsx2Uk7bXh8WDPnluTzy/h66etTp29XTNhr4noAfPSYr272GOuXF3dRBzANIhhrqOTN8zUH+pmJB8OKQ/2rUfi3IM/fb5mlpXy/wB/yFjFwXj9rFI7KhhND3irvE9TShisWhdLZEQwzAElSSwgGfn89tSDfB+Dvg8JiFdlZmJMrMAFVXmOWpqjwLg5vGQgzEwgLGQxHMkwTzLHkeWsxJJPYLdC2vDsfcW5iLqulsjNJMLclsg7vq0n3iocbfu4eUw7ut1hluOubMFjVUjYdT5U88RuHAYM/WrRYG4ptoWB8KNLZYPhkkaiN/KlviOJJK4sxb71QcgYEAghcszrAI864pL3nGwatUUxKHDrXW7/AIV/nXldNt/SRdUAZrOgjW2OXXSva31vzYhTe9WltWdgqAsx0AUEknyApk7L9hcTjIYjurX43GpH8I5+u3rXWuz3ZvDYJYsoC/O42rH+Q8tqTmkaiL2U+i93i5jSUTcWwfEf7RG3oPnVLtth7djiIs2barb7hVyqB97vAxPsw15mK7C1zrXFfpKbNxG8YnKtnTWDCyQ0coYmD0GhjS8Mrb9PuTNGdmsGDfVo8STPh0kZl0MRy2mflTra29z+ppG7MO/1pUYxAZyNYJYGSJ6Ex6TtTxa2rXuQuBV+k4zhbafjxCL+TH9qbzSd9IzCMEh+9i0PsJB/9hTi1MEB+2DRgcT/ANph8xH70P7LcZw1rBYdXvKuW2AS0qJ5wWA086m7fXcvD8QeoUfN1H70V4BbyYXDr0soPki0hlXG8cwzWLxTEWXIttotxCZynSAd607BWsuAs+eY/O45H5RXnbNVGCxLFVJFpoJA0MQCPOak7IGMDhv+0p+YzfvSoaBfaJQ3FMAvQOx+TEfmlMeOYBHJ2Ckn0g0r33zcbtj8GFJ9yzj/AO6N9p7hXB4kjcWXj1yED86KCxN7NM/DblqzeYnD4lFZHOyXiozKegJgf4T+KuhFARBEjoaH8a4JbxOHOHfaBlP4WA0Yen5iRzoT2J4u5LYLE6YmxpJP+8QbMCdzEa8wQesUSS9l+C2UuYm6ttATiGCEKPCoCqQvTxZtqGdrbDfX8FatXLtvvi3eC3cdcwUq2ytAMZhI6+VMvZpfsS347t5/Zr9wj8opc441xuM4cW0V2tYdnCs2UEsLq6nKY3XlQA1Yi9bw9sZix1yqCWd3bUhVzEszb+w6ChvCMDjCS97EMqkytkLZJRej3Mmp9Pmd6rdi+IDEm7cvAjF22KOrf8NZMC2OSmNTuSupMCmoCgAF2qxos4Z3gnxqBEb5hG+keHWlDgvGlw+IGKuK5t2VdggJAJYZBJP8TgyZMCmjtmgaxbDMAO8L6zrCsdY1gSDp0jnXP+1NwLhmVVKoSgBI1eZcN6eEQPWegjsDQN7V9qb3ELpuXsoC6IonwLyA/n1rzD8T77C/VzvbnL6GNvcChL8HvhVbISGE6fvXlnh95CGy5Y/EQP1qXGMlsxauxU79uprKIHhLnWF11+Jf51lXqiF/M+rTiNPStRemqNpjHi36VMhArz2dtFlLtcb7XYoDieJZnygtbQgnQgW7ZMT97YCNfEa62sk1xrtPZz4/FzBUXdf4oRVCr0JmPcbV0dM+fT7mOZcBHsrfDYnLvltnKdJiVGoOq77DTTlpLla2HpSp2YwoXEOwIMW8piPjlM49QVHzpqt7D0roMkU8ZwLDXTmuWUZtwSNQd9Dyq9ZtBRlGaB+JmY/NiTXsef6V5DdR8j/OhsdA7j3A1xad3cuXVTSVTIASDIJlCfaY0q5w7Cm0i2zcLhQFUsADAECSIB+QqQl+in3I/Y1ltifiAHoZ/YUlK3Q6BPanhd3E2GsW7iIHjMWUk6ENAgiJgfnVjgmGu2cOlpwhNpFRSrHxhVgEgqMp086o4ztBFy6qhUtWdL1+4fCrQGyW1XW48EaSI89J2tceZcO1+9bFsaZUJOaD8Oca5XfSLYzHUecUSDsNw7FLxK5i3sg23t92qo6FlEpqc2UfdJMdedEu173Th2t2bT3GbL8IEBc4LTJGuUEe4qYcbP2Cm03e3o+zDAlR99p5ovNtAeRNbXO0VgC4VJdLX+9uKBkSORYkBm/hXMdRpTAutxC2ts3XJRF1Y3FZI9QwB/nypY7UcOuX7aY6wjWsRYOZAR4rloawy8iQSQp1gkGC0ApgcK+JdcRfUrbUzYsty6Xbo/5h5L9weex8CgAZ2WUjB4edzZQn1Khj+Zpc4RfW7xzEMGBFuxkEEakG1MehJFO5tgjKQCIiI0jaI6VV/wBDYfMG7i1mGzC2oI9CBIoEK/bHh74e6vEsMJZBGIT/AJlvSSfMACT5Kfu6tHDOIW79pb1syjCR5dQehB0I8qsYzCrdQo8lTuAzLI6SpBjyobw3s7Yw2buA6Bt17xypJETlYkTtqOgpN7Aa8bsEi2ZjIDJ5AGAZGhI05GdBoa572zZnABid1KnQZVUqZ8+8J9Ipq7YXyuIUknILRDKWGQySRIJAzSFAP8VKXG3ZhaSBKlndxu6s5QAwcseEH36Cs8lqIMq8HxhI7tmGYbNOhPrV69gCw+0Bj8Q/WqGDwtszlga7CdIAHPai2HvlPMcwdiPOueXTqXtRdMwlsxcbh2vxLXtN/wDqsX8YtYmG1EWXIg6iCBqPOva32J3OlG8xaAPerg0qJYArx203rglJdj2En3JRcrkWOJ+tYlyYU4h42+JX0EEHeOWu0a11W0CfSuS8WVwt26BmX6zdbXkO9ZTPKIk+1dXTcP8AQxz9hg7M483TclQCF1I2Mk7xpm8Ou/qd6L8Z4tbw1rvLkxICqurOx2VRzJofwGyqi5lIOgmBENBn2iKDdoLvecWwVlvgQd5HVvtGB9u6X866VyYMZsHbxNxc11xZnUW7YVivk7uCGPooA89604hbxdtC9i4t4qJ7u6igt5K1vKAekg+1FhWwosCnw7GNdw9u8qjNctq4UsQJZQ0ZoJjXeKEcG7TPiLl60uGYNYbK/wBom8sukgTqhpjtWwAAAABsBypS+j23N7iD/ixLD5NcP/1TAv2cbhL118Ndsi3ecS1u6iTcGmoZSVf4eRPw+Whm5w602TNbU92cyAjRW/FG2bz3FLPbXDd5jcAlrW6HLGN1thrZJP8AD4W+RHOjHbHi5wuHzIJuuclsH8R5n0H5wOdIdG+Ot4S1de9euKj3VCnNcIzKswFWdtSYAidd6F4Xh2BuLh7FvEyLLZkt5rfiIESyFQGIJzTBM0g4rC57gzuzS0XHJkueZJ9dhyEAUZucKtiySIK80J8gZXod4PKsJ9TGDV9zth0M5Ld0dNt2Qu3M6nck9SedefVF5CPQkfoaUewnF2uNewOIPeNbEozam5aMCHncgMu/JvKai4Xh/q/GHsMzm3dt95YBuPCkalQJg/C+nIAVu4xlycW6dDqLA6t/iJ/U1uE/iP5fypM7Xvdw2Kwtxb95cPeu5Lq55AYmQVzTlBEyBpC6UZ7R3bymxaw1wi9caACqMuRRNy5ckTCiBoRLMo509KXArYdArW4NPcfrQvjeJuYfC3LvegugkF7chjsqBVZdWaANefOpeENiGRGxItq5AJRA3gMGQSWMnbYD3ofAhV41h3uY5xoyHKInbKgncabkz5D0pZ7QXVOKuKpGUKiyJA+HvDpPVp50Z4vxInEMqAjK9xieZMsI10AgJrsB6UmcX4kpxF1NfiILD+HwSAeXhrPJbVIR5hba5mYuQRzzEak7EQeZmj/Zri9i3dVXZiWKHvXtqShVpfug4gg+dL1jABVV7hTumnK5MEnYwAZkT6V5ZZSs5+8QHW2fjjbWBoD1ApUOjv8A/r3ghoXJPM+LXz3rK+fzxO3+EfM1lTpKs76bulRl2LhS0ArI9jB/UVtnHLWocddgK/4WE+h8J/WfavPcU1R2yhe5at22mM5rk9ksyXIuxmd2ynkDcYAxOsnl/R61bMGZrhWDx/8Awwu5MMDrJ6zuPy8q6uiilGVfL7nPniotHQeytphZYs2Ys2hBkRAAjyqh21wj27tjH21LdwYugDU251I9AWH96dgat9klIsnNM5gDPUQP685piFdfcxrY2wuIW4iujBlYSpHMGlrt9iLuHw/f2L1xHzgRIZTIP3XBA25RRW1wZUJay72ZMlUgoT/YcFV8yuUmq/Gezv1pVS9fuZFbNCKiyYIEkg9T86Yw5gLTKgD3GuNzZgoJP91QI9qSuwGAW9axTlris2IcBrdy4keFWmFYAmXO4NOGLW4Ui26q0RmdS3LeFZdaEdjeBXcFbayXS4hYvmGZWBKqsRqCPDvPzoAqdgsYUu4jC34OJRpNw6tdt6QSxJJAkESdA46GtfpLch8Ix+EO0+s2yPyB+Rq32o7P3Lly3isKyribX4tri/hb5kejEaaEXOIYD69hTbvW2svoRmytkcTqCpIZdxuJB5HYoaYh4WznPSTlJ6NMCeg3E9Ypn4hw8d3mAgmB6yRrS1d7P30uAXZQzq2ptOdBnDgQJ3IaDvAo9wvEPkNsW2vHMcotsGBjbxAZUUxMsRvzNeZ1ODI5LQexj6pOOpuqKHY62TxZiBotjxH+7bH6kfKjf0kWzaGHxyDxYa6M0c7bEAj3IC/3zRjsl2fOGV3uENfvHNcK7LvCJ/CJP9RRHjHDhfsXbLbXEKz0JGh9jB9q9OKpJHkZHqk35gnttgFxXD7wBEd33iNpuozjU7AgR6NUPYG+2IsDF3GDXXUW9PuLb8MerNLn+0B90UI7F4m5isPawbqQMOcuInZlRotWh1mPF5WyPv1HwXGnAYnG4ILJdxcwqawzXIXLpsqys9Bbc8qozGfEr9ZxQTezhiGfo2IIlFPkinOfNk6UaJ1Hof2qtwvAizaVAcx1LMd3diWdj5liT71PcHxT+H+dJgjm+EVSzM0kswjwDKV8IEmYEmTGsgDqZT+G8AONJuWyAWuQcxjLmOaZnbWNRXQOK4ZVLBWzFVJVUXMSVVnCjpsdhJjflST2e4gltXVTAdwSp8KEADdhr1GTnGtQ35AgTieDqHZAH8AbNJBAgkEowEMP3mveA423YuEqzqwU+OdC0GBA5GedNGR8RGHJgKCEchkB5xp5ECP4hvVPDdjS+Du4m3mYo0NayQynnIJkka/1NLV2ZSQuXhaZixvrLEk/ZkakzsDpXtdGtdnuDMAwTHQwn4euvM17U+IvmPQzrd7hFkiYygcw2g+elCbmEtuCqF7qkEHIojXT4z4flNbPhiYzhrzQILfCD5KIUR6TRTFY5bS6xoNB51yNanxVG0FldJPn9SjhcObNgtfCBlQwFJYmAYJJAiRyArg/DuG+Oy2sZM5zARGXkdtTNdN7Q8eLK+v3T+hpL4a6mwudB4AMpXNJ8BzFh/CRPTbyrrwVoeldyuq6d4nHU92hh7MXS1gEgDxaATtCnnrJmdfWjgoRwG2BaEAauTvM+fvFFhV9znoT/pMt5bNq5bJS410JmUkEgo+hg66qKYsXwTwEWbt21cA8LC5cYTyzI5KsOuk+dAfpGPgwqxM4hdBGuhECdJMxrRfifaYW3S13NxL13S2LmQJm2GZ1ZhEkaCTqOtUI87E8dfFWW70AXbTlHjYmJB8uh8xUfbbi9/CW1vWWU5nClHUEfCx8JBB+7zJ3q52U4D9UslC2e47F7jREsenkP5+lCfpH1XCJ+LEr+hX/AOqO4Djw+3dC/bMjNzyIVA6jVmn1qrj+M27dwWQGu3iJFq2AWjq0kKi67sRU3HOIdxh7t7QlFJE7Ftlnykihf0fYDLhu/c5rt8l3c7kSQsnpGsdWNAUE1xOI37hQOnfeL5ZMv/lUWA7Qo976u9u7avQWCXFGqjcqykqR70Yy1WvYFWuW7h+K3mg+TLBHpsf7opgQY3j+HstlvXRbPLvAyg/2WYZW35E1ewmKt3VD23V1PNSCPmKSfpNQPcwFo658QAR1GZEP/vT5QBXwWAt2s/dqFzubjR952+Imq97g1o4lcUR9qls2wfImZ9RLD0Y0O7f4e2cDedlBZFlGjxIxIAKncbxpWdg8CFwdm4S7PcTMWZ3PxeICCYECBp0piD1DePYsWsPeuEkZQNRPOBpGv3qKEUudtj/sjLp43CwQTImSIGp0X99AJpMQsdn8UpvJdBhQNjuZEbnb7sqDyUnenDE8HweLCl7a5lMqynKwMzMrvr1pEzJasJlEu7hWblBB0BgbxMDy61Jh8bcXYn2/qayc6kS43wHMR9GIIixjLiKDmVbihwrHcqVKkNpvQ3HfRnxLMzJiLNwMVYgu65mUQCwKkHzq1he1N1Oc0Vsdu2HxKKtODJ9tCy3YXjBMkWSTv9oP5V7Tb/r6v4PzNe0acZWvIFOzFxzYF64uTPqizqE5E+Z39IqlxrEBgc2o6UV4pfgRtShxHFZia5pyc5Hs9Jh8NKuwu8eJVTB0Kt/6mqGDLLAVmGggaSIj4Z0ZfLccp3qxxq4XzAa5bbE+QiP3Hzrfg+FZX+0AyBTAJnMRBBXooGs/KumKUcf6v7HN1k5Ty7+Qzdm7TCwmbNmLMTmiRLNpppptRfLVXhSZbFswwEEwwYEDU6g6zHKrFnFIwBUgg7a+YHPzI+dRe7OdoTu3GKQ4nAW8yyL4ZtRoM9sCek6/I0wdr+CfWsOVX/eJ4rZ28Q5TykafI8qv3cLZf4rSNO8op/UVYsBVAVQFUbACAPSKu0RQI7Hcc+tWPFpet+G6p0IYaZo5TB9CCOVC+2wzY3htv/rFj/da0f50ducEsm99YQtavEQz2zGYfxqQVbbcidBVfG9lku3reIbEX+8tkZDNqBBmMuSI69aaEXe1uEa9g76KCWKyoHMqQ4A8zlj3qP6PsctzA2SPugofIqSPzEH3ozakASZPMgRPtNAv9BvYvPfwbKO8M3bDyEdvxIwBNt/Yg9KdBY1Ka9K0G/0ndAM4S+SPwthyD6E3Rp6gVpwX6y917+JTulAyWrIYNCyGZnKmC5IUabBfPUCwF21wxu8R4fbVyjDMwYBSVMhpAYEf8PmDTE+DxY+DFWz/ANyxP/pcT9KV8bxINxixdZLiWbaFe8uWriLmyXdZdRAlwJNdARgwBBBBEgjYjkR1FAMQvpGuYpcBcFw2GRmQMUFxW0cMIUlhuonXaacOBWMmGsJ+G0i/JAKVvpbP+y2rU6veHyCPJ+ZWnhbcCOmlMRoRQDtLhe8t21JhM5Z50BGVok7ASwOuhiKYGpU7Y4koEBANsISQZALyuT1AysSDpEnlUsBK4lYfMguMxl5yk/ALa6iNh8Y2r0DzPvr/AF86n4j3cqUmWlmmZDHKG+IdV5acxVMvWMviYRVGzk+R9z+81Gx8v0rxmqMmmhnuc9P6+dZWmasphR0jtBjTMA0sYy+FUkmiPELgdiZoFxrCTbmTpyrnjzZ9DWmFG9orbwt0trdxCgQfuW5BHu2/kIoy/Dy0tAFsn4RplAO+253PXYxSpwfD3r95baBmbTlOUAjUzpHrXbOCdnkyRdJcepjrG8muh3pXnv8AY8zOoKTfyX1FzDNFlCZ0WTrJ6+9DS+FdUcwBbIC5pBRvBeI9RkUnplPKa6hdw9vJkCIFURlAERtEbRSB2mt4e1JZV7sgswImCFgnqfDI9NKyvTLfuZR94tuxVwli1bLKjCWYkiVmSZPnuedR2sEypbtLejJEaCWVQAA0HUaGevtUdkYdrq3BHesJB1BIIyjQ9Qhj0Mc6kXBWbl1cQrZmWB4WBXwh4mP+6T8vOd0YM3uYW+M5W6CGIKggDL45YA5T9wQJB1JO0Ae21xAdM3dlMozwDmzBWkrJAgtl36eemlvhrqioLzSHktrLLBBU+LcySDyMGNKkvW78jK6x3ktP/L08I8J1if62ok1GLvhVJsSxaGCsIVZEMDrIE6+h0q1gMazlwUdMrEDN94BmUMvkQs9dekE0zdxIVzlUtn8AABHdm4dfjWWCQYJGvWrNzF3FshzaLXMom2pmGMSM0bDXWOVAiLB9pUYMxzAKwXYGSxYCI1+7RE8WQFwzAZAC8gjKDBknbnVB+Io1xLTWnIuAEMV8MkO2Vp1DAITqOdbcNvWMSjMqAh1CtIEsrKCASNwVYaTTYBa3xBToGUmJgMPh6+nnVlL4pff6rezsWjPaAckso7u4Si7+HUoQOfz1vYLBqpQpc0CRHgIZSSQdB1O43pN0MnxfBcJeJa7Ytsx3Yrqfca1fw6JbXKpMD8TMxHuxJihiYC6BaHfSLejaEZx4QCxkyQAfUtyr2zZvgvmuI0tKCIyrmYwSBvBUTrsaVgErp8J9KTO2NybzLqAtkNmAnL42UwOvjHypnshz8QUaiMrEzqN5UR+dAuP2iMQpNzwkqMoMQAQZmDpIk8tPImmmJnOuOYtrVxUGVgLY5EblmGnLRhp1mh/+lz+D86udqiGxV0qIWQBz0CqP2oKyVzOW5soqi43FjyUfOobmPuHnHpUAStwlGoelGuZup+dZW8CsosZ1NMI126EQAsT6QOZPlTK3YyyF+0LXCd9So9o1/Oo+zFrKnfEav15KP5kfkKIY3ihAidP0rGL2PTzTlq0x4RpZtW7KlLaKgP4BE+vU+tHMJxhGWNAV5fyrmPHO0mQwpk0Gt9qHnWqjKRnPBGa9pnUsdxG6xYIun4joB7/ypG7UY5WuJbBkKJYmI9/LegXEe1l5wQCQI5eVDcLdZLwDmRcPhY8njVT6gSPcdKqONylbJyOGKNIfMAqXIfwsw2bTTfmPU/M1bwfD0trlRQFPL2C8/ICgPA762rObYatpzLMW+ZJ/Or3Z68wuYi075yHW4DP3biDRf4Q6OAOkV1pHmNlg8GAFsIzIE0hYGaWRjmjcnJH941LhMM6M5Z2bMxIBnwgkmACSNAQNI2qnhb1x8RilF5gtvuwgIQhWZM7TKyRquk/Ks4d2hNyzh2yfa3wYQEgDLOdydSE0kbk5lHOqomzZbWJy3/GAzf7qDmy775lGu3UaepNxr13vWUIO7ySrfx9D4pjXpyNeY/HPZQ3XVXtrq+UEMq82AJOaNyNDAMSdDJxHilu0lu5kLrcZVUpl1LmE3I0MjXzooRquMdcP3r24fJmNtSTBiYmJ056cjvWljiygWwVGa6WgWyGXwkAmSF01HKigQRMEfr+U6+lU7eOwzrm71MoMSxAAYGCPFEEGlQWVbT4M96gCDK03AARqjyCYHwhx6aN51bsYSwbiXUYAhQEClYAyuiwI2h3AG3loIuf6OQzoviBBgRKkkkEjkSxPqSa1ucLUutwjxLEamNJyyNjGYx60bjsiThUWu7F65/vFfNJzQCpdZQr8UNryzk8hXl6xiAbxR1OZT3IY6I+QKuYZTIzAtM89jUacBVUdEa4udg2YNqCDPhIiJ1/xHlpRMCNOnWf3pMLIuHi5C95GbMenw65ZgATETAikXtJZvNirrK6EqdFMnIhDL4lBBhp1M9NgJroVkeIe/wCw/eud3r7XbjS65Q2c6kHKzAoG21OYQNdzM7MRExS4lrduf22/U1T7urjgkz1rR1rhs6yqVqJzU92tBb5n5VSJZVzeRryrcVlOwO/X2CgAaACB6DSkztRxUqMq7mmLil/KCeVc149jjcc9BUpWd6dbg27cLHWogZ2/rlWVthQ+eVPhZlDajQhssRyOvWtoxOeeVl36hKlZInciP3Bq6+EFxCjc+Y3B3BHQg61OE39f2FSWxrVrYxk7LOAw7juUMFEAzGdWYABZBHwzJ3mQtX0sm3i0dLcI9opcKgQGDBrZIGp3cTHOocPcA5x66frRSzc6Vqmc8kUOEWFu3MX3iOA94QGDrnQWraTBjMsgiNq3x1sWsZh7sAWu7azIgLbZirJPQHLlHnA51LxLH3EewqZPtbmQ5gTAyM5Igj8O3nVjjXEO4stcKd4BAKyBIZgmkgg6sNDVkFjjeIW3h7rNr4CAObMRlVQObMSAB50FfCNbscMw7/Et23mHnbtXHPyKj5UQxOItWDZLWfE7i2mQKcrkEwJIgQDqK24iLDX7AuG4t4Zms5e8iQIYwAU0DQc3WgA8tLXZLEt9Tt/Yl1vXXJaVy5bl9zLAnNGUxoDy5agrdw5UlziGHhyjPkyrJ1MKFljA3JjluZi4RgrtjDpZtPauZFyozBlHlmylp9o9qAPFum7jWw0kWcPaVmUE+N3JyhjuUVUPh5ltdq37R2zYsPiLHgayM5UaJcRdXV1Gmqgw0SDGsSDs/D7lvEjEp9pmti3eXwgtlJKXF2GYEkFZAg6aiD7x62+Jsth7asvejK7sCAiH44B1ZisgAaSdTQIj47xO8iWL+HBdT43tQsvZyF2KaT3gEQJg7UUvcQBw5v2irr3ZuKdYYBc242nry6VU7+2mKsWFIGWzcIWRpBsKo9YLfI0G4mpwZuWgD9WxeZUjXucRc0Kxyt3CSRyDTsDQA0LeYJncBWCFmAMgaTuQJ26VzMqqywBjJ4ZYEaK5kHUsdTMwZiug9pLhXDYkjfuWA9SrAfrXKOH2nW2Y1tkGDqcrSEKztzPPl8s5fC2NcorkHYb1Fd6f0aeuwvD8HiGVWLpiEkyG0ccivmOlA+2PBmwuKZDs3iUgRIP6QZ0rzlNOVHa1sLptxqd/0qK5J8qsuvWoGE1oiSPujWVv9XNZQB1ntNeyoxrmd46099sLvgidzSG9XA6pvaiNrTMCE+KCQPQE6fKqXDsSGvWwRqWB9DEzvFW3YjUGD/nVBrotPmAAJMgxpry9Jk1vB9jlyruO1jUUTtcLcobkaDX2pRwPF2MZrYg7HUdN96feA9qrDWVtvnBEptmBG3KeTDlzqkjGUynYq0ltdDlE9YFDLGPtEwl1GEmJ0mPIwfyolZedoPoaez5JsocVKvisJbLQc1x4DEHw2iBqDI+L3g1J2msfZIveOQ1+yuUlSDN5DuVzcuvKiYAO6z8v3r2/hrdzL3iZspzLIPhYbEEbEdRV2RRX45rfwS/9Zm/w2bp/epL2vEbI/Bh7rf4rlpf2NT3sDae5buktntzkOZtMwyt4SYMjqK2HC/8AaDiFutmNvu8rBSgXNn0AAMzzmnYjbtRcy4LEn/oXPzRhV/hGHFuzaQAAKiiB5KBQnjXC8Rfw96yLlvNdEA5WVUXTSJYknxayNxppRUXrsqO6GpGZswKqu5jZieQ05g0AXVurMSJ6SJqQVGyA7gH1FYtleQj0JH6UvaDYmrS/ZVxlZQwkGD1Vgyn1BAPtWBfM/lWwpiBHatv9lvaAklVg7GWQa/y51z3F4cW7DBbmYllDjSQcsiQIA+ExoND5U+9rrYbDFTPiuCY8iTrofw/p60pdpsAlsIRkz3NXZZ1yiBoT/FuInn1OOR+waQ+IXsPda2wZCQymQRyI5009quMpi8JZu6d+jFLnuJkeRifelF2qP9K4XG2mdaZo1exAk6D+tqkaFEt7DmaF4/HR5tyHJf8AOtIxbJbou9+fwfnWUtm634j86ytvCRGo6v2wu+KJ2/zpUerXEMWXdmPM1RJqYrY6pvc1YVU4kkxpPUVcHWoMTrHrVGb4LHZ7Ctfv27IMi4wXK3wiTz/o0X432fu4HFsrtbKxr3ZMBCZiGAIPMxRH6J8Bnx6OdrKNcY+gyD/ycH2qh234mbt27cn4mMemy/lR4jTOacU3RWx2FtC412xdQhlDNqpUPrJK7huoI3Om/hs4fEu69FMwRGUMvUkgwSP/AMiaXsGsCiVlM1PxvkPwjbD3bufS5cGdtIZiF00LQYAA0jmRz1kvjsZibci3eM5dGeCOQkmDG55HYdDVJAFEDSOmkfKorpfXI5E7zr8uczrNUsyJ8JhXhvae/kc3ChKvk1GpMkH4SBHw/nV7B9sUdgvdqSeUwfYEHzHtScvDWiCQBM8+kVdbCjJCqQcsFphjtJBAkAkDT5RVeJDzJeOSHq32lsRJ7wagaazIzCNdo8qv4bjuHZzbW8M43VlIOu24FIpu23OcypUAIAD4QsxzgmNOXSifCsGhcZyrLBaVgxpEuZkHWBpIA5azSknwS01yPVu7OxVo6H/9qQN5H+vSkNcNba5dOdZILAgEECdW201+fsBUPZrHXxeP2lx7evxOYWOcEnTSNBuGqrEdEzjr89P1rdaQD2txa/ctvz1BErJGkEa+3OjHDO1Iurm7hjtPd6kS0A6gaRDTO09KYFjtTiraW7feHdpA18Whzba7NvSVxSw9y0jIHa2hYM2QLBOVgCF2hSBJ99aYe02KS7dtDVVtEg5gNyEYEbyANZ126xTZ2Wu27mGDWiWR2JkgyYhDmzAGZXnXJ1eTw8d+htgWqZxO4hjw6nlXtzEBNIlunn510jt9ewFi2yi2pxLDTJoF/ieP051xvG42ZCe7cz/lWGL3iujafskuLxhk6y3M9PIULfet0NbMtdSVGfJDFZW2SsqrENTivIrY1qxrM6GzQ1Dd5etSs1eNbJIAEnkPM6UMk6B2HsnD8NxeKOhvEWrfoJzEe7f+Fc+4zdzOB5/ppXSO1eIW1hMNhE/4akv5t19ySfeuXXDmusd40+VQzJbuy7YWr9o1SsVdTTT+veoNCXSKlUDc1rat6jmxMD18hUt22VJBU5gdc2kf50gI99fzNaXLo9TXl5h94k+QqNb4EmB5CigPHJIM6VVAze1XsPmJljMcuVV8UkNoN6ANrfEHtghXYDUZQd530251vax7qAMq7ydDMRAEg9KgRAAWNRF9J5mmpSXDE4phvh/Hbas/eWixPwlSPBttPmOv7kjLJQJbXvLjKPC6gZSygykkmCBL/P5UjG1T28PAk7cz0rSOeSJeKLGHAcPa8rd0mjECFYOxIgN4QZEklvRYrOI9onwINixcIcLkxGYCLd1TBNrlmjQ8tKTsbxGB4TlXqN29OgoNfxJc67f1v51U/er2kTGOh2ibiHEWuMdTBMkkyWPUmqlakVutWkktg5MFbg1rFZQCN4rKzNWUhjQaiesrKRsyJd6L9mLYbG2gRIzfoCR+grKykyOzLv0i3mDOQSPEo06Un4KvayplwRAJ4armGGhPOvayoNAz2NthsXazCfFOvUAkfmKJ/SPbAvoQILJJ8yDA/KsrKxl/cXoWvhFYWwd6jdABtWVlaIlnpNa4g6L6fvWVlAiG98K+9RXPiHtWVlAzLA1NacUcyqT4YmPOsrKI8gxXxDksZNapWVldi4MTasWsrKQiSsrKykUZWVlZQB//2Q==',
    description: 'The timeless classic on personal achievement and financial success. Over 100 million copies sold worldwide.',
    features: [
      'Classic personal development book',
      'Time-tested success principles',
      'Interviews with successful people',
      'Practical wealth-building advice',
      'Inspirational and motivational'
    ]
  },

  // Sports & Fitness
  {
    id: 11,
    name: 'Adidas Ultraboost 23 Running Shoes',
    currentPrice: 16999,
    originalPrice: 19999,
    rating: 4.8,
    reviews: 1876,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop',
    description: 'Premium running shoes with responsive Boost midsole and Primeknit upper for ultimate comfort.',
    features: [
      'Boost midsole for energy return',
      'Primeknit upper for breathability',
      'Continental rubber outsole',
      'Supportive heel counter',
      'Ideal for daily running'
    ]
  },
  {
    id: 12,
    name: 'Fitbit Charge 6 Fitness Tracker',
    currentPrice: 19999,
    originalPrice: 22999,
    rating: 4.5,
    reviews: 2134,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
    description: 'Advanced fitness tracker with built-in GPS, heart rate monitoring, and 7-day battery life.',
    features: [
      'Built-in GPS and heart rate monitor',
      '7-day battery life',
      '40+ exercise modes',
      'Sleep tracking and insights',
      'Smartphone notifications'
    ]
  },

  // Beauty & Personal Care
  {
    id: 13,
    name: 'The Ordinary Skincare Set',
    currentPrice: 2499,
    originalPrice: 3299,
    rating: 4.6,
    reviews: 3456,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop',
    description: 'Complete skincare routine with science-backed ingredients for healthy, glowing skin.',
    features: [
      'Complete 5-step skincare routine',
      'Science-backed active ingredients',
      'Suitable for all skin types',
      'Cruelty-free and vegan',
      'Dermatologist recommended'
    ]
  },
  {
    id: 14,
    name: 'Maybelline New York Makeup Kit',
    currentPrice: 1999,
    originalPrice: 2799,
    rating: 4.4,
    reviews: 2167,
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=500&fit=crop',
    description: 'Professional makeup kit with long-lasting foundation, mascara, lipstick, and eyeshadow palette.',
    features: [
      'Complete makeup collection',
      'Long-lasting formula',
      'Professional quality',
      'Travel-friendly packaging',
      'Suitable for all occasions'
    ],
    feedback: [
      { user: "Beauty Blogger", rating: 5, comment: "Amazing quality! Long-lasting and great pigmentation." },
      { user: "Makeup Artist", rating: 4, comment: "Professional grade quality. Perfect for clients." },
      { user: "College Student", rating: 5, comment: "Great value for money. Looks expensive!" }
    ]
  },
  
  // Additional Products with Customer Feedback
  {
    id: 15,
    name: 'Samsung Galaxy S24 Ultra',
    currentPrice: 124999,
    originalPrice: 134999,
    rating: 4.8,
    reviews: 1876,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop',
    description: 'Most advanced Galaxy smartphone with S Pen, AI photography, and 200MP camera.',
    features: [
      '6.8-inch Dynamic AMOLED 2X display',
      '200MP main camera with AI zoom',
      'S Pen with advanced features',
      '12GB RAM + 256GB storage',
      '5000mAh battery with 45W charging'
    ],
    feedback: [
      { user: "Tech Reviewer", rating: 5, comment: "Best Android phone I've used! S Pen is incredibly useful." },
      { user: "Photography Enthusiast", rating: 5, comment: "Camera quality is mind-blowing. Night mode is perfect!" },
      { user: "Business User", rating: 4, comment: "Great for productivity but takes time to learn all features." }
    ]
  },
  {
    id: 16,
    name: 'OnePlus 12',
    currentPrice: 64999,
    originalPrice: 69999,
    rating: 4.6,
    reviews: 945,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    description: 'Flagship killer with Snapdragon 8 Gen 3, 100W fast charging, and premium design.',
    features: [
      'Snapdragon 8 Gen 3 processor',
      '100W SuperVOOC charging',
      '50MP Hasselblad camera',
      '12GB RAM + 256GB storage',
      '120Hz LTPO display'
    ],
    feedback: [
      { user: "Gaming Enthusiast", rating: 5, comment: "Perfect for gaming! Fast charging is incredible." },
      { user: "Value Seeker", rating: 5, comment: "Best value flagship phone in the market!" },
      { user: "Camera Lover", rating: 4, comment: "Great camera quality for the price range." }
    ]
  },
  {
    id: 17,
    name: 'Nike Air Jordan 1 Retro High',
    currentPrice: 12995,
    originalPrice: 15995,
    rating: 4.7,
    reviews: 1234,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
    description: 'Iconic basketball shoes with premium leather and classic design that never goes out of style.',
    features: [
      'Premium leather upper',
      'Air-Sole unit for cushioning',
      'Rubber outsole for traction',
      'Classic colorway',
      'High-top silhouette'
    ],
    feedback: [
      { user: "Sneaker Head", rating: 5, comment: "Classic design! Great quality and very comfortable." },
      { user: "Basketball Player", rating: 4, comment: "Good for casual wear but not ideal for actual playing." },
      { user: "Fashion Lover", rating: 5, comment: "Perfect with any outfit. Gets compliments everywhere!" }
    ]
  },
  {
    id: 18,
    name: 'Adidas Ultraboost 22',
    currentPrice: 16999,
    originalPrice: 19999,
    rating: 4.6,
    reviews: 892,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    description: 'Revolutionary running shoes with Boost technology for maximum energy return.',
    features: [
      'Boost midsole technology',
      'Primeknit upper for comfort',
      'Continental rubber outsole',
      'Responsive cushioning',
      'Energy return system'
    ],
    feedback: [
      { user: "Marathon Runner", rating: 5, comment: "Best running shoes I've ever owned! Amazing comfort." },
      { user: "Fitness Trainer", rating: 5, comment: "Perfect for all types of workouts. Highly recommended!" },
      { user: "Daily Walker", rating: 4, comment: "Super comfortable for daily wear. Worth the investment." }
    ]
  },
  {
    id: 19,
    name: 'Instant Pot Duo 7-in-1',
    currentPrice: 8999,
    originalPrice: 12999,
    rating: 4.7,
    reviews: 2341,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
    description: 'Multi-functional electric pressure cooker that replaces 7 kitchen appliances.',
    features: [
      '7-in-1 functionality',
      '6-quart capacity',
      'Smart programs',
      'Stainless steel construction',
      'Safety features included'
    ],
    feedback: [
      { user: "Busy Mom", rating: 5, comment: "Life-saver! Quick meals for the whole family." },
      { user: "Cooking Enthusiast", rating: 5, comment: "Amazing versatility. Saves so much time in kitchen!" },
      { user: "Working Professional", rating: 4, comment: "Perfect for meal prep. Easy to use and clean." }
    ]
  },
  {
    id: 20,
    name: 'Dyson V15 Detect Vacuum',
    currentPrice: 65999,
    originalPrice: 72999,
    rating: 4.8,
    reviews: 756,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    description: 'Intelligent cordless vacuum with laser detection and powerful suction.',
    features: [
      'Laser dust detection',
      'Powerful digital motor',
      'LCD screen with real-time data',
      'Up to 60 minutes runtime',
      'Multiple cleaning heads'
    ],
    feedback: [
      { user: "Clean Freak", rating: 5, comment: "Amazing! Shows dust you never knew existed. Very effective." },
      { user: "Pet Owner", rating: 5, comment: "Perfect for pet hair removal. Powerful suction!" },
      { user: "House Keeper", rating: 4, comment: "Professional quality but quite expensive. Worth it though!" }
    ]
  }
];

export const categories = [
  { id: 1, name: 'Electronics', icon: '📱', color: '#2874f0' },
  { id: 2, name: 'Fashion', icon: '👕', color: '#ff6b6b' },
  { id: 3, name: 'Home', icon: '🏠', color: '#4ecdc4' },
  { id: 4, name: 'Books', icon: '📚', color: '#45b7d1' },
  { id: 5, name: 'Sports', icon: '⚽', color: '#96ceb4' },
  { id: 6, name: 'Beauty', icon: '💄', color: '#feca57' }
];

export const fallbackImg = 'https://placehold.co/400x400?text=No+Image';
