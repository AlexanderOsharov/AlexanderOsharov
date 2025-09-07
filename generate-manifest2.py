#!/usr/bin/env python3
import os
import json
import glob
from pathlib import Path

def create_manifest_from_folders():
    """
    Создает manifest.json с ссылками на все файлы из папок images, videos, audio
    """
    
    # Определяем пути к папкам
    base_path = Path(".")  # Текущая директория
    images_dir = base_path / "images"
    videos_dir = base_path / "videos"
    audio_dir = base_path / "audio"
    
    # Проверяем существование папок
    folders = {
        "images": images_dir,
        "videos": videos_dir,
        "audio": audio_dir
    }
    
    # Словарь для хранения файлов
    manifest = {
        "images": [],
        "audio": [],
        "videos": []
    }
    
    # Обработка изображений
    if images_dir.exists():
        image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.webp', '*.gif', '*.JPG', '*.JPEG', '*.PNG', '*.WEBP', '*.GIF']
        image_files = set()  # Используем set для уникальности
        for ext in image_extensions:
            for file_path in images_dir.glob(ext):
                filename = file_path.name
                # Исключаем аватарки из списка фото
                if not filename.startswith('avatar'):
                    image_files.add(filename)
        manifest["images"] = sorted(list(image_files))
    
    # Обработка видео
    if videos_dir.exists():
        video_extensions = ['*.mp4', '*.avi', '*.mov', '*.wmv', '*.MP4', '*.AVI', '*.MOV', '*.WMV']
        video_files = set()  # Используем set для уникальности
        for ext in video_extensions:
            for file_path in videos_dir.glob(ext):
                video_files.add(file_path.name)
        manifest["videos"] = sorted(list(video_files))
    
    # Обработка аудио
    if audio_dir.exists():
        audio_extensions = ['*.mp3', '*.wav', '*.m4a', '*.ogg', '*.MP3', '*.WAV', '*.M4A', '*.OGG']
        audio_files = set()  # Используем set для уникальности
        for ext in audio_extensions:
            for file_path in audio_dir.glob(ext):
                audio_files.add(file_path.name)
        manifest["audio"] = sorted(list(audio_files))
    
    # Сохраняем manifest.json
    with open('manifest.json', 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    
    print("manifest.json успешно создан!")
    print(f"Изображения: {len(manifest['images'])} файлов")
    print(f"Видео: {len(manifest['videos'])} файлов")
    print(f"Аудио: {len(manifest['audio'])} файлов")
    
    return manifest

def create_simple_manifest():
    """
    Создает упрощенный manifest.json для тестирования
    """
    manifest = {
        "images": [
            "photo1.jpg",
            "photo2.png",
            "photo3.webp"
        ],
        "audio": [
            "background-music.m4a",
            "background2.mp3"
        ],
        "videos": [
            "dad.mp4",
            "mom1.mp4",
            "sister.mp4"
        ]
    }
    
    with open('manifest.json', 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    
    print("Упрощенный manifest.json создан для тестирования")
    return manifest

def main():
    print("=== Создание manifest.json ===")
    
    try:
        manifest = create_manifest_from_folders()
        print("\nГотово! manifest.json создан.")
        print("Проверьте содержимое:")
        for category, files in manifest.items():
            if files:
                print(f"{category}: {len(files)} файлов")
    except Exception as e:
        print(f"Ошибка при создании manifest: {e}")
        print("Создаем упрощенный вариант...")
        create_simple_manifest()

if __name__ == "__main__":
    main()