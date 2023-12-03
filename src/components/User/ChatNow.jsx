import React from "react";

export default function Chat() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button class='md:box-content py-4 px-4 bg-transparent hover:bg-rose-700 text-rose-500 font-normal hover:text-white border border-rose-500 border-2 hover:border-transparent rounded inline-flex items-center' onClick={() => setShowModal(true)}>
                <img class='w-auto h-4 mr-2' src='/src/assets/images/icons/Chat.png' />
                <span class='text-lg'>Chat Sekarang</span>
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative max-w-lg my-6 mx-auto">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-lg bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <p align='left' class='p-3 mx-5 mb-3 font-normal text-xs text-rose-500 bg-rose-200'>Anda akan terhubung dengan pemilik langsung melalui chatroom HairHub</p>
                                <div className="relative px-6 py-2 flex-auto" align='left'>
                                    <h1 align='left' class='text-xl font-semibold'>Pilih Pertanyaan</h1>
                                    <form class='my-2 mt-3'>
                                        <label>
                                            <input type='radio' name='chat' class='mr-3'/> 
                                            Saya butuh cepat nih, apakah bisa booking sekarang?
                                        </label>
                                        <br/>
                                        <label>
                                            <input type='radio' name='chat' class='mr-3'/> 
                                            Apakah ada diskon untuk potong rambut?
                                        </label>
                                        <br/>
                                        <label>
                                            <input type='radio' name='chat' class='mr-3'/> 
                                            Saya ingin survey layanan dulu
                                        </label>
                                        <br/>
                                        <label>
                                            <input type='radio' name='chat' class='mr-3'/> 
                                            Alamat barbershop dimana?
                                        </label>
                                        <br/>
                                        <label>
                                            <input type='radio' name='chat' class='mr-3'/> 
                                            Cara menghubungi pemilik barbershop?
                                        </label>
                                        <br/>
                                        <label>
                                            <input type='radio' name='chat' class='mr-3'/> 
                                            Boleh tanya-tanya dulu?
                                        </label>
                                        <br/>
                                        <label>
                                            <input type='radio' name='chat' class='mr-3'/> 
                                            Apakah ada jenis layanan lain?
                                        </label>
                                        <br/>
                                        <label>
                                            <input type='radio' name='chat' class='mr-3'/> 
                                            Apakah barber yang saya inginkan senggang?
                                        </label>
                                        <br/>
                                    </form>
                                </div>
                                <hr class='mx-5'/>
                                <p class='text-xs my-3 mx-5'>
                                    Dengan mengirim pesan, anda menyetujui untuk berkomunikasi dengan pemilik hanya 
                                    melalui chatroom HairHub untuk melindungi pengguna kami. 
                                    <a href='#' class='text-rose-400'> Lihat Syarat dan Ketentuan.</a>
                                </p>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button class='w-full p-2 bg-rose-500 hover:bg-rose-700 text-white font-normal'>Chat Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
