function KiemTra()
{
	var ht=f.HoTen.value;
	var dc=f.DiaChi.value;
	var e=f.Email.value;
	var dt=f.DienThoai.value;
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	
	if(ht=='')
	{
		alert('Họ và tên không được bỏ trống!');
		return false;
	}
	
	if(dc=='')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
	
	if(e=='')
	{
		alert('Email không được bỏ trống!');
		return false;
	}
	
	if(dt=='')
	{
		alert('Điện thoại không được bỏ trống!');
		return false;
	}
	
	if(!emailPattern.test(e))
	{
		alert('Địa chỉ email không hợp lệ!');
		return false;
	}
	
	return true;
}