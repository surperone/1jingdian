"""Fix a typo.

Revision ID: 42743fd63f51
Revises: 26ac19fecf2f
Create Date: 2015-03-07 15:51:28.114774

"""

# revision identifiers, used by Alembic.
revision = '42743fd63f51'
down_revision = '26ac19fecf2f'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('piece', sa.Column('created_at', sa.DateTime(), nullable=True))
    op.drop_column('piece', 'create_at')
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('piece', sa.Column('create_at', mysql.DATETIME(), nullable=True))
    op.drop_column('piece', 'created_at')
    ### end Alembic commands ###
