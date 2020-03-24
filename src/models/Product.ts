export default interface Product {
    Id: string;
    Name: string;
    Description: string;
    Price: number;
    Quantity: number;
    ImageName: string;
    DateOfAddition: Date;
    IsHidden: boolean;
    CategoryId: string;
    ImagePath: string;
 }