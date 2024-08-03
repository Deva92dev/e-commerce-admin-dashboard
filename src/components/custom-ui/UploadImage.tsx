'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '../ui/button';
import { Plus, Trash } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageUploads {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const UploadImage = ({ value, onChange, onRemove }: ImageUploads) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      {Array.isArray(value) ? (
        <div className='mb-4 flex flex-wrap items-center gap-4'>
          {value.map((url, index) => (
            <div key={index} className='relative w-[200px] h-[200px]'>
              <div className='absolute top-0 right-0 z-10'>
                <Button
                  type='button'
                  onClick={() => onRemove(url)}
                  size='sm'
                  className='bg-red-1 text-white'
                >
                  <Trash className='h-4 w-4' />
                </Button>
              </div>
              <Image
                src={url}
                alt='collection'
                className='object-cover rounded-lg'
                fill
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='mb-4'>
          <Image
            src={value}
            alt='collection'
            className='object-cover rounded-lg'
            fill
          />
        </div>
      )}

      <CldUploadWidget
        uploadPreset='pc9vtdmh'
        options={{
          folder: 'delight-foods',
        }}
        onSuccess={onUpload}
      >
        {({ open }) => {
          return (
            <Button onClick={() => open()} className='bg-gray-500 text-white'>
              <Plus className='h-4 w-4 mr-2' /> Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );

  // return (
  //   <div>
  //     <div className='mb-4 flex flex-wrap items-center gap-4'>
  //       {value.map((url, index) => (
  //         <div key={index} className='relative w-[200px] h-[200px]'>
  //           <div className='absolute top-0 right-0 z-10'>
  //             <Button
  //               type='button'
  //               onClick={() => onRemove(url)}
  //               size='sm'
  //               className='bg-red-1 text-white'
  //             >
  //               <Trash className='h-4 w-4' />
  //             </Button>
  //           </div>
  //           <Image
  //             src={url}
  //             alt='collection'
  //             className='object-cover rounded-lg'
  //             fill
  //           />
  //         </div>
  //       ))}
  //     </div>
  //     <CldUploadWidget
  //       uploadPreset='pc9vtdmh'
  //       options={{ folder: 'delight-foods', multiple: true }}
  //       onSuccess={onUpload}
  //     >
  //       {({ open }) => {
  //         return (
  //           <Button onClick={() => open()} className='bg-gray-500 text-white'>
  //             <Plus className='h-4 w-4 mr-2' /> Upload Image
  //           </Button>
  //         );
  //       }}
  //     </CldUploadWidget>
  //   </div>
  // );
};

export default UploadImage;
