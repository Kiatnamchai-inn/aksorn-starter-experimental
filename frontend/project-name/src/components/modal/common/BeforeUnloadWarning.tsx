import { Modal } from 'antd';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import Button from '@components/common/button/Button';
import { AlertIcon } from '@icons';

export default NiceModal.create(() => {
  // Hooks
  const modal = useModal();

  // Functions and Declarations
  const closeModal = () => {
    NiceModal.hide('before-unload-warning');
    modal.remove();
  };

  const handleConfirm = () => {
    modal.resolve();
    modal.hide();
  };

  return (
    <Modal
      title={
        <div className='flex flex-col items-center gap-2'>
          <AlertIcon />
          <span className='text-3b font-bold'>ต้องการออกจากหน้านี้หรือไม่?</span>
        </div>
      }
      open={modal.visible}
      footer={null}
      closeIcon={null}
      width={368}
      centered
      destroyOnHidden
    >
      <div className='flex flex-col'>
        <div className='h-[66px] text-center'>
          <span className='text-medium-r font-normal whitespace-pre-line'>
            {`หากคุณกดยืนยัน ระบบจะไม่บันทึกข้อมูล\nและจะออกจากหน้านี้ทันที`}
          </span>
        </div>
        <div className='mt-[10px] flex flex-row items-center gap-4'>
          <Button onClick={closeModal} priority='secondary'>
            ยกเลิก
          </Button>
          <Button onClick={handleConfirm} priority='primary'>
            ยืนยัน
          </Button>
        </div>
      </div>
    </Modal>
  );
});
