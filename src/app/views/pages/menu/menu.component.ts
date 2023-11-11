import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  onFileChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const dishImage = document.getElementById('dishImage') as HTMLImageElement;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        dishImage.src = e.target.result as string;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  updateDish(): void {
    const dishName = document.getElementById('dishName') as HTMLInputElement;
    const dishType = document.getElementById('dishType') as HTMLInputElement;
    const dishPrice = document.getElementById('dishPrice') as HTMLInputElement;
    const dishStatus = document.getElementById('dishStatus') as HTMLSelectElement;

    // Lấy thông tin từ các trường nhập liệu
    const name = dishName.value;
    const type = dishType.value;
    const price = dishPrice.value;
    const status = dishStatus.value;

    // Cập nhật thông tin vào danh sách List dish (cần triển khai logic cập nhật ở đây)

    // Xóa thông tin sau khi cập nhật
    dishName.value = '';
    dishType.value = '';
    dishPrice.value = '';
    dishStatus.value = 'available';
  }
}
