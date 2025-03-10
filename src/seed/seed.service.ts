import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../pets/pet.entity';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);
  constructor(
    @InjectRepository(Pet)

    private petsRepository: Repository<Pet>,
  ) { }

  async seed() {
    const count = await this.petsRepository.count();

    if (count > 2) {
      this.logger.log('Database has already been seeded');
      return;
    }
    const pets = [
      {
        name: 'Max',
        breed: 'Golden Retriever',
        age: 3,
        image: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181524/202104golden-retriever-puppy.jpg',
        images: [
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181524/202104golden-retriever-puppy.jpg', order: 1 },
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181511/202104golden-retriever-dog-breed-swimming.jpg', order: 2 },
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181515/202104golden-retriever-dog-breed-playing-fetch.jpg', order: 3 }
        ],
        isAdopted: true,
        color: 'Golden',
        description: 'Friendly family dog who loves swimming and playing fetch.',
        category: 'Dogs'
      },

      {
        category: "Dogs",
        name: "Buddy",
        breed: "Labrador Retriever",
        age: 2,
        image: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181343/202104labrador-retriever-yellow-puppy.jpg',
        images: [
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181343/202104labrador-retriever-yellow-puppy.jpg', order: 1 },
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181350/202104labrador-retriever-dog-breed-yellow-lab-in-meadow.jpg', order: 2 },
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181347/202104labrador-retriever-dog-breed-chocolate.jpg', order: 3 }
        ],
        isAdopted: false,
        color: "Yellow",
        description: "Energetic companion great with children and other pets."
      },
      {
        category: "Dogs",
        name: "Daisy",
        breed: "French Bulldog",
        age: 4,
        image: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11180042/202105french-bulldog-sleepy.jpg',
        images: [
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11180042/202105french-bulldog-sleepy.jpg', order: 1 },
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11180109/202106French-Bulldog-FeaturedImage.jpg', order: 3 },
          { url: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11180057/202105french-bulldog-walk.jpg', order: 2 }
        ],
        isAdopted: false,
        color: "Fawn",
        description: "Affectionate couch potato who enjoys short walks."
      },
      {
        category: "Cats",
        name: "Lunar",
        breed: "Siamese",
        age: 2,
        isAdopted: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg",
        images: [
          { url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg', order: 1 },
          { url: 'https://s.yimg.com/ny/api/res/1.2/mC8y7cq0nr8NPfjtMGG_RQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTg-/https://media.zenfs.com/en/petsradar_797/2d768dff1b8cc1f5c5cda30561d0e555', order: 2 },
        ],
        color: "Cream",
        description: "Vocal and intelligent cat that forms strong bonds."
      },
      {
        category: "Cats",
        name: "Simba",
        breed: "Maine Coon",
        age: 1,
        isAdopted: false,
        image: "https://www.thesprucepets.com/thmb/BqNn28WROha1J9j1G3dVValShP8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg",
        images: [
          { url: 'https://www.thesprucepets.com/thmb/BqNn28WROha1J9j1G3dVValShP8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg', order: 1 },
          { url: 'https://cdn.petcloud.com.au/d/wp-content/uploads/2024/06/03124226/Maine-Coon-Cat.png', order: 2 },
        ],
        color: "Brown",
        description: "Gentle giant with luxurious fur and playful nature."
      },
      {
        category: "Cats",
        name: "Misty",
        breed: "Ragdoll",
        age: 3,
        isAdopted: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg",
        images: [
          { url: 'https://cfa.org/wp-content/uploads/2024/06/RDportrait.jpg', order: 1 },
          { url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg', order: 2 },
        ],
        color: 'Lava',
        description: "Fluffy lap cat that goes limp when held."
      },
      {
        category: "Birds",
        name: "Kiwi",
        breed: "Parakeet",
        age: 1,
        isAdopted: false,
        image: "https://animalwelfaresociety.org/wp-content/uploads/2024/08/awsmaine_FunFactsParakeetsSMALLS2_0824.jpg",
        images: [
          { url: 'https://animalwelfaresociety.org/wp-content/uploads/2024/08/awsmaine_FunFactsParakeetsSMALLS2_0824.jpg', order: 1 },
          { url: 'https://as1.ftcdn.net/jpg/02/47/32/94/1000_F_247329447_fHLa98OlvXikTbHFvkXksgZYjdMjn0eI.webp', order: 2 },
        ],
        color: "Green",
        description: "Colorful talker who enjoys mimicking household sounds."
      },
      {
        category: "Birds",
        name: "Mango",
        breed: "Cockatiel",
        age: 2,
        isAdopted: false,
        image: "https://hari.ca/wp-content/uploads/2023/03/LutinoPearl_Cockatiel.jpg",
        images: [
          { url: 'https://hari.ca/wp-content/uploads/2023/06/Pearl_Cockatiel.jpg', order: 1 },
          { url: 'https://hari.ca/wp-content/uploads/2023/03/LutinoPearl_Cockatiel.jpg', order: 2 },
        ],
        color: "Yellow",
        description: "Whistle-loving bird with striking orange cheeks."
      },
      {
        category: "Fish",
        name: "Bubbles",
        breed: "Betta",
        age: 1,
        isAdopted: false,
        image: "https://houstonaqua.com/cdn/shop/files/DSC07717.jpg?v=1698881066",
        images: [
          { url: 'https://houstonaqua.com/cdn/shop/files/DSC07717.jpg?v=1698881066', order: 1 },
          { url: 'https://houstonaqua.com/cdn/shop/files/DSC07731.jpg?v=1698881066', order: 2 },
          { url: 'https://houstonaqua.com/cdn/shop/files/DSC07709.jpg?v=1698881061', order: 3 }
        ],
        color: "Blue",
        description: "Vibrant solitary fish with flowing colorful fins."
      },
      {
        category: "Fish",
        name: "Goldie",
        breed: "Goldfish",
        age: 2,
        isAdopted: false,
        image: "https://www.thesprucepets.com/thmb/lGV2pUMd2xBwuLolOcrDfj1-fNg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1370690855-691460005dd7426d9d716ed9c2b6ad8f.jpg",
        images: [
          { url: 'https://www.thesprucepets.com/thmb/lGV2pUMd2xBwuLolOcrDfj1-fNg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1370690855-691460005dd7426d9d716ed9c2b6ad8f.jpg', order: 1 },
          { url: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/BO/NU/AQ/12128902/product-jpeg-1000x1000.jpg', order: 2 },
          { url: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/BO/NU/AQ/12128902/product-jpeg-1000x1000.jpg', order: 3 }
        ],
        color: "Gold",
        description: "Classic pond fish that recognizes its caretakers."
      },
      {
        category: "Rabbits",
        name: "Cotton",
        breed: "Mini Lop",
        age: 1,
        isAdopted: false,
        image: "https://www.everypaw.com/.imaging/mte/everypaw/2880x1212/dam/rabbit-breed-guides/miniature-lop/miniature-lop-banner.jpg/jcr:content/miniature-lop-banner.jpg",
        images: [
          { url: 'https://everbreed.com/wp-content/uploads/2024/04/Miniature_Lop_-_Front_View-e1712761788554.jpg', order: 1 },
          { url: 'https://www.everypaw.com/.imaging/mte/everypaw/2880x1212/dam/rabbit-breed-guides/miniature-lop/miniature-lop-banner.jpg/jcr:content/miniature-lop-banner.jpg', order: 2 },
          { url: 'https://cdn.shopify.com/s/files/1/2016/2903/files/Untitled_design_51_480x480.jpg?v=1686119790', order: 3 }
        ],
        color: "White",
        description: "Floppy-eared bunny that loves to explore and dig."
      },
      {
        category: "Rabbits",
        name: "Oreo",
        breed: "Dutch Rabbit",
        age: 2,
        isAdopted: false,
        image: "https://a-z-animals.com/media/2022/01/iStock-119198833.jpg",
        images: [
          { url: 'https://a-z-animals.com/media/2022/01/iStock-119198833.jpg', order: 1 },
          { url: 'https://animalcorner.org/wp-content/uploads/2020/10/Dutch-Rabbit-3.jpg', order: 2 },
        ],
        color: "Black and White",
        description: "Distinctive black-and-white marked jumper."
      },
      {
        category: "Rabbits",
        name: "Thumper",
        breed: "Flemish Giant",
        age: 1,
        isAdopted: false,
        image: "https://www.zoomontana.org/images/img_8AtAQrWt74QtJ6anMu3Qht/flemish-giant-rabbit.jpg?fit=outside&w=1600&dpr=2",
        images: [
          { url: 'https://everbreed.com/wp-content/uploads/2024/04/flemish-giant-rabbit-pet-animal-5748469.jpg', order: 1 },
          { url: 'https://www.zoomontana.org/images/img_8AtAQrWt74QtJ6anMu3Qht/flemish-giant-rabbit.jpg?fit=outside&w=1600&dpr=2', order: 2 },
          { url: 'https://image.petmd.com/files/styles/978x550/public/2023-07/Flemish.giant_.jpg?w=2048&q=75', order: 3 }
        ],
        color: "Gray",
        description: "Gentle giant rabbit reaching up to 20 pounds."
      }
    ];

    await Promise.all(
      pets.map(async (pet) => {
        const newPet = this.petsRepository.create(pet);
        await this.petsRepository.save(newPet);
      })
    );

    try {
      for (const pet of pets) {
        const newPet = this.petsRepository.create(pet);
        await this.petsRepository.save(newPet);
      }
      this.logger.log('Database seeded successfully!');
    } catch (error) {
      this.logger.error('Error seeding database:', error);
    }
  }
}