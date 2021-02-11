# Sophon

Template for ML project
このファイルはプロジェクトのreadmeに置き換えてください。

## directoryの説明

- data  データに関するスクリプトを入れてください
- regression タスク毎にフォルダーを分けてください
- app_client  クライアントアプリ
- app_server　サーバサイド

## MLで使用するデータ

- dataディレクトリにデータに関するスクリプトを入れてください。
- データ自体のCOMMITは、サイズや機密の観点から本当にCOMMITが必要か検討してください。
- UNIX環境の場合は実データへのシンボリックリンクを推奨。
- Windows環境の場合は、データのコピー方法を記載したファイルのCOMMITを推奨。
- データをコピーする場合、データを.gitignoreに追加し、誤ってCOMMITしないようにしてください。

## MLタスク

- 物体検出や回帰等タスク毎にディレクトリーを分けてください。
- ディレクトリーの下に、モデル毎のディレクトリを作成してください。
- モデルは作業順に01_xxxx等連番をつけるのを推奨。
- 最初のモデルは00_baselineとし、ベースラインとなるモデルを入れることを推奨。
- 学習用のスクリプトはtrain.py, 推論用のスクリプトはinfer.pyを推奨

## クライアントアプリ

- app_client以下に、クライアントのソースコードを入れてください
- クライアントが複数ある場合は、TOP directoryにapp_client_xxxxと別の名前のディレクトリを作成してください
  
## サーバーアプリ

- app_server以下に、サーバーサイドのソースコードを入れてください
- ファイル名はapi.pyを推奨
  
