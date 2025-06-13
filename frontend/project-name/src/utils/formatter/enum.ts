export const formatProjectType = (text: string) => {
  switch (text) {
    case 'single_school':
      return 'โรงเรียนเดียว';
    case 'multiple_schools':
      return 'หลายโรงเรียน';
    default:
      return 'เกิดข้อผิดพลาด';
  }
};

export const formatProgress = (text: string) => {
  switch (text) {
    case 'create_project':
      return 'สร้างโปรเจกต์';
    case 'in_progress':
      return 'กำลังดำเนินการ';
    case 'processing':
      return 'กำลังประมวลผล...';
    case 'available_files':
      return 'ไฟล์พร้อมใช้งาน';
    case 'error':
      return 'เกิดข้อผิดพลาด\n(ดูรายละเอียดในโปรเจกต์)';
    default:
      return '-';
  }
};
