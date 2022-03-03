class ImportCategoryUseCase {

  execute(file: Express.Multer.File): void {
    console.log("xxxxxxx", file);
  }

}

export { ImportCategoryUseCase }
