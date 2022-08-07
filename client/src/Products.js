
const products = [
    {men:{
        cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37050664_52-99999999_01.jpg?ts=1650973715554&imwidth=422&imdensity=2',
            name:'Men'
        },
        pants:[
            {cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27071111_92.jpg?ts=1638201953283&imwidth=422&imdensity=2',
            name:'Pants'
        }},[{
            id:1,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/outfit/S20/27067602_37-99999999_01.jpg?ts=1646729715038&imwidth=422&imdensity=2',
            name:'Relaxed linen pants',
            price:69.99,
            sizes:[26, 28, 30, 32],
            description:"Online Exclusive. 100% Linen. Relaxed fit. Jogger design. Drawstring waist. Loops. Two side pockets. Two welt pockets with button on the back. Zip and one button fastening.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:2,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27051160_55.jpg?ts=1643022674740&imwidth=422&imdensity=2',
            name:'Slim fit wool suit pants',
            price:59.99,
            sizes:[32, 34, 36, 38],
            description:"Slim fit. Light fabric. Recycled wool and polyester blend fabric. Medium waist. Loops. Two side pockets. Two welt pockets with button on the back. Button, hook and zipper closure. The model is 185 cm tall and is wearing a size 42.With a slightly tight cut, the Slim Fit suit adjusts a bit more to the body than the Regular Fit. Ideal for those looking to upgrade from the classic suit without showing a really tight silhouette. Our Brasilia collection comes in different two-piece designs: suit and pants. If you’re looking for distinction, we recommend a mixed motif look, proper Italian tailoring, For winter, wear it with a matching coat and sweater"
        },
        {   id:3,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27010414_92.jpg?ts=1636725943868&imwidth=422&imdensity=2',
            name:'Slim fit check suit pants',
            price:69.99,
            sizes:[26, 28, 36, 38],
            description:"Slim fit. Cropped design. Recycled polyester blend fabric. Check fabric. Loops. Two side pockets. Coin pocket. Two welt pockets with button on the back. Button, hook and zipper closure. The model is 190 cm tall and is wearing a size 40.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:4,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27075918_99.jpg?ts=1647346022247&imwidth=422&imdensity=2',
            name:'Slim fit denim-effect serge pants',
            price:35.99,
            sizes:[26, 28, 30, 36],
            description:"Online Exclusive. Slim fit. Sustainable cotton fabric. Stretch cotton fabric. Serge fabric. Two side pockets. Coin pocket. Two patch pockets on the back. Loops. Zip and one button fastening. The model is 187 cm tall and is wearing a size 42.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        }]
    ],
        shoes:[
            {cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27061138_99.jpg?ts=1637057446718&imwidth=422&imdensity=2',
            name:'Shoes'
        }},[{
            id:5,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27032527_56.jpg?ts=1639134352180&imwidth=422&imdensity=2',
            name:'Nautical suede shoe',
            price:119.99,
            sizes:[7, 7.5, 8.5, 9],
            description:"100% Suede. Leather cut. Suede fabric. Rounded toe. Rubber sole. Laces.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:6,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27054388_99.jpg?ts=1639669706905&imwidth=422&imdensity=2',
            name:'Mixed technical sneakers black',
            price:35.99,
            sizes:[7, 7.5, 8, 9.5],
            description:'Combined design. Stretch fabric. Side straps. Rounded toe. Embossed sole. Laces.'
        },
        {   id:7,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17084762_07.jpg?ts=1622796429972&imwidth=422&imdensity=2',
            name:'Chelsea suede boots',
            price:79.99,
            sizes:[ 7.5, 8.5, 9, 9.5],
            description:"Suede leather. Elastic side panels. Rounded toe. Rubber sole.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:8,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27054388_37.jpg?ts=1639669706905&imwidth=422&imdensity=2',
            name:'Mixed technical sneakers khaki',
            price:35.99,
            sizes:[ 8, 8.5, 9, 9.5],
            description:'Combined design. Stretch fabric. Side straps. Rounded toe. Embossed sole. Laces.'
        }]
    ],
        coats:[
            {cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37005523_91-99999999_01.jpg?ts=1655293870352&imwidth=422&imdensity=2&impolicy=featured',
            name:'coats'
        }},
        [{  id:9,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37001256_50_B.jpg?ts=1651668656417&imwidth=279&imdensity=2',
            name:'Slim fit wool suit blazer',
            price:229.99,
            sizes:['M', 'L', 'XL', 'XXL'],
            description:"Slim fit. Recycled wool and polyester blend fabric. Lapel with notch. Long buttoned sleeve. Welt pocket on the chest. Two pockets with flaps on the front. Two inner pockets. Double back slit. Button up. Inner lining. The model is 187 cm tall and is wearing a size 50.With a slightly tight cut, the Slim Fit suit adjusts a bit more to the body than the Regular Fit. Ideal for those looking to upgrade from the classic suit without showing a really tight silhouette. Our Brasilia collection comes in different two-piece designs: suit and pants. If you’re looking for distinction, we recommend a mixed motif look, proper Italian tailoring, For winter, wear it with a matching coat and sweater"
        },
        {   id:10,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27025755_37.jpg?ts=1646395514963&imwidth=422&imdensity=2',
            name:'Slim fit double-breasted suit blaze',
            price:129.99,
            sizes:['M', 'L', 'XL', 'XXL'],
            description:"Wrap detail. Regular fit. Light fabric. Recycled polyester blend fabric. Long buttoned sleeve. Button up. Inner lining. Inner pocket. The model is 187 cm tall and is wearing a size 50.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:11,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37040037_08-99999999_01.jpg?ts=1648483591741&imwidth=422&imdensity=2',
            name:'Slim fit linen suit blazer',
            price:169.99,
            sizes:['S', 'M','XL', 'XXL'],
            description:"Slim fit. Linen fabric. Peaked lapel. Structured shoulders. Welt pocket on the chest. Long sleeve with buttoned cuffs. Two side pockets with flaps. Back slits. Two buttons fastening. Inner pockets. The model is 190 cm tall and is wearing a size 51.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:12,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37030031_09-99999999_01.jpg?ts=1654595329817&imwidth=422&imdensity=2',
            name:'Water-repellent cotton trench',
            price:139.99,
            sizes:['XS','S', 'M','XXL'],
            description:"Sustainable cotton fabric. Waterproof fabric. Two side pockets. Classic collar. Inner pocket. Long sleeve. Inner lining. Button up. The model is 187 cm tall and is wearing a size M.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        }]
    ]
    },
    women:{
        cover:{
            ImageUrl:"https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37020452_07-99999999_01.jpg?ts=1656595006843&imwidth=422&imdensity=2",
            name:"Women"
        },
        sportswear:[
            {cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17036313_01_D1.jpg?ts=1629291122668&imwidth=422&imdensity=2',
            name:'Sportswear'
        }},[{id:13,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/outfit/S20/17044034_57-99999999_01.jpg?ts=1627905096912&imwidth=422&imdensity=2',
            name:'Waterproof sports pants',
            price:29.99,
            sizes:['S', 'M', 'L', 'XL'],
            description:"Waterproof. Recycled polyester material. Light fabric. Jogger design. High waist. Elastic waist with adjustable drawstring. Two side pockets.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:14,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17036313_01_D5.jpg?ts=1631779536225&imwidth=207&imdensity=2',
            name:'Technical quilted gilet',
            price:79.99,
            sizes:['S', 'L', 'XL'],
            description:'Activewear Collection. Quilted design. Straight design. Short design. High-neck zipper. Sleeveless. Adjustable elastic corners. Zip fastening on the front section. Inner lining.'
        },
        {   id:15,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37024377_99.jpg?ts=1654786373765&imwidth=422&imdensity=2',
            name:'Ultra-light quilted gilet',
            price:49.99,
            sizes:['S', 'M', 'L', 'XL'],
            description:"Committed Collection. Nylon fabric. Quilted design. Short design. Two side pockets. Inner lining. Recycled polyester padding. Zip fastening on the front section. Plus Size Available.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:16,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/outfit/S20/27091080_05-99999999_01.jpg?ts=1636020252694&imwidth=422&imdensity=2',
            name:'Elastic waist cotton pants',
            price:24.99,
            sizes:['S', 'M', 'L', 'XL'],
            description:'Standard design. Fabric with cotton. Elastic band. Heavy structure. Jogger design. Sport. High waist. Elastic waist with drawstring. Two side pockets. Total look. Online Exclusive.'
        }]
    ],
        shirts:[
            {cover:{
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37051026_43.jpg?ts=1654253531612&imwidth=422&imdensity=2',
                name:'Shirts'
            }},[{
                id:17,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37051308_43.jpg?ts=1654588384019&imwidth=422&imdensity=2',
                name:'Floral print blouse',
                price:79.99,
                sizes:[4, 6, 8],
                description:'Flowy fabric. Straight design. V-neck. Tie closure neckline. Floral print. Buttoned cuffs. Long sleeve. Party and events collection.'
            },
            {   id:18,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37003709_93_D5.jpg?ts=1651041933177&imwidth=422&imdensity=2',
                name:'Buttoned flowy shirt',
                price:35.99,
                sizes:[4, 6, 8],
                description:"Committed Collection. Flowy fabric. Straight design. Printed design. Shirt-style collar. Long buttoned sleeve. Button fastening on the front section. Plus Size Available.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection"
            },
            {   id:19,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37020409_85_R.jpg?ts=1650455855459&imwidth=422&imdensity=2',
                name:'Polka-dot print blouse',
                price:39.99,
                sizes:[4, 6, 8],
                description:"Committed Collection. Satin. Spots print. Straight design. Rounded neck. Short sleeve. Button closing on the neck. Plus Size Available. Party and events collection.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:20,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37031125_87_R.jpg?ts=1652875697957&imwidth=422&imdensity=2',
                name:'Floral print blouse',
                price:49.99,
                sizes:[4, 6, 8],
                description:"Committed Collection. Flowy fabric. Straight design. Flowers print. Shirt-style collar. Button fastening on the front section. Total look.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            }]
        ],
        hats:[
            {cover:{
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37042511_05_D2.jpg?ts=1655117617997&imwidth=422&imdensity=2',
                name:'Hats'
            }},[{
                id:21,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37000161_85_D2.jpg?ts=1650361684564&imwidth=422&imdensity=2',
                name:'Bucket hat with straps',
                price:35.99,
                sizes:['All size'],
                description:'Bucket design. Adjustable fastening strips. Inner lining.'
            },
            {   id:22,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27065913_43_D2.jpg?ts=1643980302576&imwidth=422&imdensity=2',
                name:'Cotton bucket hat',
                price:29.99,
                sizes:['All size'],
                description:'Cotton-blend fabric. Large. Bucket design. Straps design'
            },
            {   id:23,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37031316_43-99999999_01.jpg?ts=1654256977317&imwidth=422&imdensity=2',
                name:'Bucket print hat',
                price:39.99,
                sizes:['All size'],
                description:'100% Cotton. Bucket design. Striped print. Frayed finish.'
            },
            {   id:24,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27017115_05.jpg?ts=1644249981385&imwidth=422&imdensity=2',
                name:'Crochet bucket hat',
                price:59.99,
                sizes:['All size'],
                description:'Crochet fabric. Floral pattern. Bucket design. Boho style.'
            }]
        ]
    },

    teen:{
        cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37083837_99-99999999_01.jpg?ts=1656928324120&imwidth=422&imdensity=2&impolicy=featured',
            name:'Teen'
        },
        jumpsuits:[
            {cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37032883_TM.jpg?ts=1652773936474&imwidth=422&imdensity=2',
            name:'Jumpsuits'
        }},
        [{  id:25,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37094008_99_B.jpg?ts=1651230357349&imwidth=422&imdensity=2&impolicy=featured',
            name:'Knit long dress',
            price:45.99,
            sizes:[0, 2, 4, 6],
            description:"Thick knitted fabric. Long design. Straight design. High collar. Long sleeve.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:26,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37094008_91-99999999_01.jpg?ts=1653645087030&imwidth=422&imdensity=2&impolicy=featured',
            name:'Knit long dress',
            price:45.99,
            sizes:[4, 6, 8, 12],
            description:"Thick knitted fabric. Long design. Straight design. High collar. Long sleeve.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:27,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37045911_68_D2.jpg?ts=1653645087030&imwidth=422&imdensity=2',
            name:'Degraded knit jersey',
            price:45.99,
            sizes:[0, 2, 6, 8],
            description:"Knitted fabric. Medium knit. Oversize design. Ombre. Rolled neck. Long sleeve.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:28,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37033254_81.jpg?ts=1652858266443&imwidth=422&imdensity=2',
            name:'Zip knit sweater',
            price:45.99,
            sizes:[0, 2, 10, 12],
            description:"100% Cotton. Fine knit fabric. Striped design. Oversize design. Standard design. Perkins neck with zipper. Long sleeve. The model is 165 cm and is wearing a size S.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        }]],
        bags:[
            {cover:{
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37023263_99.jpg?ts=1657093971782&imwidth=422&imdensity=2',
                name:'Bags'
            }},[{
                id:29,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37093260_30.jpg?ts=1652879282962&imwidth=422&imdensity=2',
                name:'Pebbled leather bag Brown',
                price:59.99,
                sizes:['U'],
                description:'100% Leather. Long detachable chain strap. Inner zipped pocket. Zip fastening. Inner lining. Teen collection.'
            },
            {   id:30,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37033262_30_D2.jpg?ts=1652879282962&imwidth=422&imdensity=2',
                name:'Round leather bag',
                price:49.99,
                sizes:['U'],
                description:'100% Leather. Round design. Zip fastening. Inner lining. Teen collection.'
            },
            {   id:31,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37053261_99_D2.jpg?ts=1652879282962&imwidth=422&imdensity=2',
                name:'Pebbled leather bag black',
                price:59.99,
                sizes:['U'],
                description:'100% Leather. Long detachable chain strap. Inner zipped pocket. Zip fastening. Inner lining. Teen collection.'
            },
            {   id:32,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37023263_99_D4.jpg?ts=1652874745453&imwidth=207&imdensity=2',
                name:'Pebbled leather bag',
                price:49.99,
                sizes:['U'],
                description:'100% Leather. Long detachable chain strap. Inner zipped pocket. Zip fastening. Inner lining. Teen collection.'
            }
        ]
        ],
        scrunchies:[
            {cover:{
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37083261_52.jpg?ts=1653563373223&imwidth=422&imdensity=2&impolicy=featured',
                name:'Scrunchies'
            }}
        
          , [ { id:33,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37043262_52.jpg?ts=1653563373223&imwidth=422&imdensity=2&impolicy=featured',
                name:'Velvet hairband',
                price:12.99,
                sizes:['U'],
                description:"Velvet fabric. Elastic gathered section.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection"
            },
            {   id:34,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37083261_52_D2.jpg?ts=1653580042792&imwidth=422&imdensity=2&impolicy=featured',
                name:'Scrunchies 3 pack',
                price:9.99,
                sizes:['U'],
                description:"Pack of 3. Textured design. Elastic gathered section.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:35,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37043262_81.jpg?ts=1653563373223&imwidth=422&imdensity=2&impolicy=featured',
                name:'Velvet hairband',
                price:12.99,
                sizes:['U'],
                description:"Velvet fabric. Elastic gathered section.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:36,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37063261_52_B.jpg?ts=1653565677141&imwidth=422&imdensity=2&impolicy=featured',
                name:'Knot textured hairband',
                price:12.99,
                sizes:['U'],
                description:"Textured design. Knot detail.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection"
            }
        ]
    ]
    },
    home:{
        cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37034063_05_D8.jpg?ts=1653199718886&imwidth=279&imdensity=2',
            name:'Home'
        },
        towels:[
            {cover:{
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17061097_30_D8.jpg?ts=1623164711327&imwidth=422&imdensity=2',
            name:'towels'
        }},[{
            id:37,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17071096_30_B.jpg?ts=1622718378174&imwidth=279&imdensity=2',
            name:'Striped cotton bath towel 3543x5906 in',
            price:39.99,
            sizes:['35.4x59in'],
            description:"Online Exclusive. Size: 90x150cm. Weight: 550 gr/m2 . Plain fabric. Combined in design, the AGRI bath towel has an organic cotton composition. This type of fabric, besides presenting a sustainable process for the environment, is a hypoallergenic natural fiber which offers the most softness and absorption capacity. This towel is available in three different colors.."
        },
        {   id:38,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37061505_08-99999999_01.jpg?ts=1656518006990&imwidth=852&imdensity=2',
            name:'cotton checked hand towel 90x150cm',
            price:19.99,
            sizes:['35.4x59in'],
            description:'Online Exclusive. 100% Cotton. Size: 50x90cm'
        },
        {   id:39,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27011508_83_D8.jpg?ts=1646657106909&imwidth=422&imdensity=2',
            name:'Basic quality hand towel 1969x3543 in',
            price:12.99,
            sizes:['27.5x55in'],
            description:"Online Exclusive. Size: 50x90cm. 500 GSM. 100% Cotton. Plain fabric.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
        },
        {   id:40,
            ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27034764_83_D2.jpg?ts=1644850510158&imwidth=422&imdensity=2',
            name:'100% cotton hand towel 3543x5906 in',
            price:35.99,
            sizes:['30.5x50in'],
            description:'Online Exclusive. Size: 90x150cm. 100% Cotton. 500 GSM. Natural fiber fabric.'
        }]],
        duvets:[
            {cover:{
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37014029_28-99999999_01.jpg?ts=1656680913618&imwidth=422&imdensity=2&impolicy=featured',
                name:'duvet cover'
            }},[{
                id:41,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37004036_08_D9.jpg?ts=1657021867595&imwidth=422&imdensity=2&impolicy=featured',
                name:'100% Cotton Gingham check duvet cover for 150cm bed',
                price:99.99,
                sizes:['Single'],
                description:"Online Exclusive. Size: 240x220cm. 100% Cotton. 200 threads. Gingham check design. Button up. Filling not included.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:42,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27031144_08_D8.jpg?ts=1649776164991&imwidth=422&imdensity=2',
                name:'Striped print duvet cover (180/200cm bed)',
                price:89.99,
                sizes:['Queen'],
                description:"Online Exclusive. Size: 260x240cm. 100% cotton fabric. Striped print. Filling not included.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:43,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37061292_01-99999999_01.jpg?ts=1655456907775&imwidth=422&imdensity=2',
                name:'Floral embroidered duvet cover 220x220cm',
                price:99.99,
                sizes:['Double'],
                description:"Online Exclusive. Size: 220x220cm. 100% Cotton. Flowers print. Button up. Filling not included.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:44,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37051320_01-99999999_01.jpg?ts=1657011108490&imwidth=422&imdensity=2',
                name:'Margaret embroidery duvet cover 5906x8661 in',
                price:99.99,
                sizes:['Single'],
                description:'Online Exclusive. Size: 150x220cm. 100% Cotton. Button up. Filling not included.'
            }
        ]],
        beds:[
            {cover:{
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17024413_28_D8.jpg?ts=1631613933633&imwidth=422&imdensity=2',
                name:'bed spread'
            }},[{
                id:45,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17031097_05_D3.jpg?ts=1622479501530&imwidth=422&imdensity=2',
                name:'Fine-stripe flat sheet 9449x11024 in',
                price:49.99,
                sizes:["Queen", "Single", "Double", "King"],
                description:"Online Exclusive. Size: 240x280cm. 100% Cotton. Washed cotton. 200 threads. Striped design. Woven stripe .The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:46,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17041094_52_D2.jpg?ts=1622480692937&imwidth=422&imdensity=2',
                name:'percale flat sheet 6299x11024 in',
                price:39.99,
                sizes:["Queen", "Single", "Double", "King"],
                description:"Online Exclusive. Size: 160x280cm. 100% organic cotton. 300 threads. Cotton percale fabric. Plain fabric.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:47,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17084400_28_D8.jpg?ts=1629985512682&imwidth=422&imdensity=2',
                name:'Flowers print flat sheet 6299x11024 in',
                price:39.99,
                sizes:["Queen", "Single", "Double", "King"],
                description:"Online Exclusive. Size: 160x280cm. 100% Cotton. Flowers print.The garments labelled as Committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Mango's goal is to support the implementation of practices more committed to the environment, and therefore increase the number of sustainable garments in the collection."
            },
            {   id:48,
                ImageUrl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37110476_01_D8.jpg?ts=1654272905273&imwidth=422&imdensity=2',
                name:'Washed cotton flat sheet 9449x11024 in',
                price:59.99,
                sizes:["Queen", "Single", "Double", "King"],
                description:'Online Exclusive. Size: 240x280cm. 200 threads. 100% Cotton. Washed cotton. Plain fabric.'
            }]
        ]
    }}
];

   
export default products;