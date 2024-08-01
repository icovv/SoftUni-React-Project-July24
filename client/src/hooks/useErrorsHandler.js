export default function useErrorsHandler(value){
    
    let urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    
    let brand = value.brand.trim();
    let year = value.year.trim();
    let model = value.model.trim();
    let capacity = value.capacity.trim();
    let power = value.power.trim();
    let fuel = value.fuel.trim();
    let color = value.color.trim();
    let image = value.image.trim();
    let description = value.description.trim();

    let errors = []
    if (brand == '' || year == '' || model == '' || capacity == '' || power == '' || fuel == '' || color == '' || image == '' || description == '') {
        errors.push({ message: "All fields are required!" });

    }
    if (year < 1886) {
        errors.push({ message: "Please make sure to provide valid year of the vehicle! (Oldest created car was in 1886)" });

    }
    if (capacity < 0) {
        errors.push({ message: "Please make sure to provide a valid engine capacity!" });

    }
    if (power < 0) {
        errors.push({ message: "Please make sure to provide a valid horse power!" });

    }
    if (!(typeof color == "string")) {
        errors.push({ message: "Please make sure to provide a valid color!" });
    }
    if (!(fuel == "Diesel" || fuel == 'Petrol')) {
        errors.push({ message: "Please make sure to provide a fuel type from the listed ones!" });

    }
    if (!urlPattern.test(image)) {
        errors.push({ message: "Please make sure to provide a valid url!" });

    }
    if (description.length < 5) {
        errors.push({ message: "The description is too short!" });

    }
    if (errors.length > 0) {
        return {errors};
    }
    let items = {
        "year": year,
        "carBrand": brand,
        "carModel": model,
        "engineCapacity": capacity,
        "fuelType": fuel,
        "horsePower": power,
        "color": color,
        "description": description,
        "imageURL": image,
    }

    return {
        errors,
        items
    }
}