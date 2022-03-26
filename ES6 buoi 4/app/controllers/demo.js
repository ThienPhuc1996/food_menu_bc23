/*
   Lập trình hướng đối tượng OOP (OBJECT ORIENTED PROGRAMING)
   Hướng đối tượng có các tính chất 
   
   + Tính trừu tượng (Abstraction) : Loại bỏ những thứ phức tạp ko cần thiết của đối tượng, chỉ tập trung vào những gì cốt lõi và quan trọng, tổ chức các thuộc tính và phương thức xử lý trong lập trình

   + Tính đóng gói (Encapsulation): Tính chất che giấu thông tin và những xử lý bên trong của đối tượng, các đối tượng khác ko thể truy xuất đến dc. VD: Thuộc tính của object nào thì object đó mới có khả năng truy xuất thay đổi, phương thức của object nào thì phải thông qua object đó mới có thể gọi dc

   + Tính kế thừa (inheritance): Các class con có thể kế thừa các phương thức và thuộc tính từ class cha. Có thể định nghĩa lại các phương thức đó (overide - ghi đè phương thức)

   + Tính đa hình (polymorphism): JS ko hỗ trợ tính đa hình của hướng đối tượng
   */

   // vd tính kế thừa
   function sinhVien (){// sinhVien gọi là tên lớp (prototype)
      this.maSinhVien = '';
      this.tenSinhVien = '';
      this.hienThiThongTin = function (){// Phương thức
          console.log('Mã sinh viên', this.maSinhVien);
          console.log('Tên sinh viên', this.tenSinhVien);
      }
   }
   let sv = new sinhVien (1, 'Nguyen Văn A');
   console.log('sv',sv);

   //ES6
   class SinhVienES6  {
      maSinhVien = '';
      tenSinhVien = '';
      constructor(maSV,tenSV){
          this.maSinhVien = maSV;
          this.tenSinhVien = tenSV;
      }

      hienThiTTSV = () => {
          console.log('Mã sinh viên', this.maSinhVien);
          console.log('Tên sinh viên', this.tenSinhVien);
      }
      // Phương thức
      hienThiThongTin(){
          console.log('Mã sinh viên', this.maSinhVien);
          console.log('Tên sinh viên', this.tenSinhVien);
      }
   }

   let sv2 = new SinhVienES6(1, 'Nguyễn Văn Tèo')
   sv2.hienThiThongTin();
   sv2.hienThiTTSV();

   console.log(sv2);

   /*
      Kỹ thuật kế thừa trong hướng đối tượng
   */

      class NguoiDung {
          taiKhoan = '';
          matKhau = '';
          email = '';
          soDienThoai = '';
          constructor(taiKhoan,email){

            this.taiKhoan = taiKhoan;
            this.email = email;
          }
          dangNhap (){
              console.log('Đăng nhập');
          }
          dangXuat (){
              console.log('Đăng xuất');
          }
          hienThiThongTin(){
              console.log('taiKhoan',this.taiKhoan);
              console.log('email',this.email);
          }
      }

      class HocVien extends NguoiDung {
          danhSachLopHoc = ['FE', 'BE'];
          constructor (taiKhoan,email){
              super(taiKhoan,email);
              
          }
          hienThiThongTin(){
              super.hienThiThongTin();
              console.log('Danh sách môn học', this.danhSachLopHoc)
          }
      }

      let hocVien = new HocVien('admin', 'admin@gmail.com');

      hocVien.hienThiThongTin()
      //console.log('Học Viên',hocVien);

      